package io.nuls.contract.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JSONUtils {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();


    public static ObjectMapper getInstance() {
        return OBJECT_MAPPER;
    }

    /**
     * javaBean,list,array convert to json string/对象转JSON字符串
     *
     * @param obj 需转换的对象
     * @return 转换得到的JSON字符串
     */
    public static String obj2json(Object obj) throws JsonProcessingException {
        return OBJECT_MAPPER.writeValueAsString(obj);
    }

    public static String obj2PrettyJson(Object obj) throws JsonProcessingException {
        return OBJECT_MAPPER.writerWithDefaultPrettyPrinter().writeValueAsString(obj);
    }

    /**
     * json string convert to javaBean/JSON字符串转普通对象
     *
     * @param jsonStr JSON字符串
     * @param clazz   目标对象类型
     * @return 转换得到的对象
     */
    public static <T> T json2pojo(String jsonStr, Class<T> clazz) throws IOException {
        return OBJECT_MAPPER.readValue(jsonStr, clazz);
    }

    /**
     * JSON字符串转为复杂对象（list,map等）
     *
     * @param json        JSON字符串
     * @param entityClass 目标对象
     * @param itemClass   List/Map保存的数据的类型
     * @return 转换得到的对象
     */
    public static <T> T json2pojo(String json, Class<T> entityClass, Class... itemClass) throws IOException {
        JavaType javaType = OBJECT_MAPPER.getTypeFactory().constructParametricType(entityClass, itemClass);
        return OBJECT_MAPPER.readValue(json, javaType);
    }

    /**
     * json string convert to map/JSON字符串转MAP
     *
     * @param jsonStr JSON字符串
     * @return 转换得到的MAP
     */
    public static <T> Map<String, Object> json2map(String jsonStr)
            throws IOException {
        return OBJECT_MAPPER.readValue(jsonStr, Map.class);
    }

    /**
     * json string convert to map/JSON字符串转MAP
     *
     * @param jsonStr JSON字符串
     * @return 转换得到的MAP
     */
    public static <T> Map<String, T> jsonToMap(String jsonStr)
            throws IOException {
        return OBJECT_MAPPER.readValue(jsonStr, Map.class);
    }

    /**
     * json string convert to map with javaBean/JSON转MAP
     *
     * @param jsonStr JSON字符串
     * @param clazz   MAP中值的类型
     * @return 转换得到的MAP
     */
    public static <T> Map<String, T> json2map(String jsonStr, Class<T> clazz) throws IOException{
        Map<String, Map<String, Object>> map = OBJECT_MAPPER.readValue(jsonStr,
                new TypeReference<Map<String, Map<String, Object>>>() {
                });
        Map<String, T> result = new HashMap<String, T>();
        for (Map.Entry<String, Map<String, Object>> entry : map.entrySet()) {
            result.put(entry.getKey(), map2pojo(entry.getValue(), clazz));
        }
        return result;
    }

    /**
     * json array string convert to list with javaBean/JSON字符串转List
     *
     * @param jsonArrayStr JSON字符串
     * @param clazz        List存储的对象类型
     * @return 转换后得到的List
     */
    public static <T> List<T> json2list(String jsonArrayStr, Class<T> clazz)
            throws IOException {
        List<Map<String, Object>> list = OBJECT_MAPPER.readValue(jsonArrayStr,
                new TypeReference<List<Map<String, Object>>>() {
                });
        List<T> result = new ArrayList<T>();
        for (Map<String, Object> map : list) {
            result.add(map2pojo(map, clazz));
        }
        return result;
    }

    /**
     * map convert to javaBean/map转javabean
     *
     * @param map   需转化的MAP
     * @param clazz 目标类型
     * @return 得到的目标对象
     */
    public static <T> T map2pojo(Map map, Class<T> clazz) {
        return OBJECT_MAPPER.convertValue(map, clazz);
    }
}
