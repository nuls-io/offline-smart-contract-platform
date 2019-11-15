/**
 * MIT License
 * <p>
 * Copyright (c) 2017-2018 nuls.io
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
package io.nuls.contract.rpc.exception;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.googlecode.jsonrpc4j.DefaultExceptionResolver;
import com.googlecode.jsonrpc4j.JsonRpcBasicServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

/**
 * @author: PierreLuo
 * @date: 2019-11-15
 */
public class DefineExceptionResolver extends DefaultExceptionResolver {

    final Logger logger = LoggerFactory.getLogger(getClass());
    public static final DefineExceptionResolver INSTANCE = new DefineExceptionResolver();

    @Override
    public Throwable resolveException(ObjectNode response) {
        ObjectNode errorObject = ObjectNode.class.cast(response.get(JsonRpcBasicServer.ERROR));
        if (!hasNonNullObjectData(errorObject, JsonRpcBasicServer.DATA))
            return createJsonRpcClientException(errorObject);

        ObjectNode dataObject = ObjectNode.class.cast(errorObject.get(JsonRpcBasicServer.DATA));
        if (!hasNonNullTextualData(dataObject, JsonRpcBasicServer.EXCEPTION_TYPE_NAME))
            return createJsonRpcClientException(errorObject);

        try {
            String exceptionTypeName = dataObject.get(JsonRpcBasicServer.EXCEPTION_TYPE_NAME).asText();
            String message = hasNonNullTextualData(dataObject, JsonRpcBasicServer.ERROR_MESSAGE) ? dataObject.get(JsonRpcBasicServer.ERROR_MESSAGE).asText() : null;
            return createThrowable(exceptionTypeName, message);
        } catch (Exception e) {
            logger.warn("Unable to create throwable", e);
            return createJsonRpcClientException(errorObject);
        }
    }

    private NulsJsonRpcClientException createJsonRpcClientException(ObjectNode errorObject) {
        String code = errorObject.has(JsonRpcBasicServer.ERROR_CODE) ? errorObject.get(JsonRpcBasicServer.ERROR_CODE).asText() : "err_0014";
        return new NulsJsonRpcClientException(code, errorObject.get(JsonRpcBasicServer.ERROR_MESSAGE).asText(), errorObject.get(JsonRpcBasicServer.DATA));
    }

    private Throwable createThrowable(String typeName, String message) throws IllegalAccessException, InvocationTargetException, InstantiationException, ClassNotFoundException {
        Class<? extends Throwable> clazz = resolveThrowableClass(typeName);

        Constructor<? extends Throwable> defaultCtr = getDefaultConstructor(clazz);
        Constructor<? extends Throwable> messageCtr = getMessageConstructor(clazz);

        if (message != null && messageCtr != null) {
            return messageCtr.newInstance(message);
        } else if (message != null && defaultCtr != null) {
            logger.warn("Unable to invoke message constructor for {}, fallback to default", clazz.getName());
            return defaultCtr.newInstance();
        } else if (message == null && defaultCtr != null) {
            return defaultCtr.newInstance();
        } else if (message == null && messageCtr != null) {
            logger.warn("Passing null message to message constructor for {}", clazz.getName());
            return messageCtr.newInstance((String) null);
        } else {
            logger.error("Unable to find message or default constructor for {} have {}", clazz.getName(), clazz.getDeclaredConstructors());
            return null;
        }
    }

    private Constructor<? extends Throwable> getDefaultConstructor(Class<? extends Throwable> clazz) {
        Constructor<? extends Throwable> defaultCtr = null;
        try {
            defaultCtr = clazz.getConstructor();
        } catch (NoSuchMethodException e) {
            handleException(e);
        }
        return defaultCtr;
    }

    private Constructor<? extends Throwable> getMessageConstructor(Class<? extends Throwable> clazz) {
        Constructor<? extends Throwable> messageCtr = null;
        try {
            messageCtr = clazz.getConstructor(String.class);
        } catch (NoSuchMethodException e) {
            handleException(e);
        }
        return messageCtr;
    }

    private void handleException(Exception e) {
        /* do nothing */
    }

    static boolean hasNonNullObjectData(final ObjectNode node, final String key) {
        return hasNonNullData(node, key) && node.get(key).isObject();
    }

    static boolean hasNonNullData(final ObjectNode node, final String key) {
        return node.has(key) && !node.get(key).isNull();
    }

    static boolean hasNonNullTextualData(final ObjectNode node, final String key) {
        return hasNonNullData(node, key) && node.get(key).isTextual();
    }
}
