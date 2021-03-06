package io.nuls.contract.model.txdata;

import io.nuls.base.basic.NulsByteBuffer;
import io.nuls.base.basic.NulsOutputStreamBuffer;
import io.nuls.base.data.Address;
import io.nuls.base.data.BaseNulsData;
import io.nuls.base.data.NulsHash;
import io.nuls.core.exception.NulsException;

import java.io.IOException;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

public class ContractTransferData  extends BaseNulsData implements ContractData {

    private NulsHash orginTxHash;
    private byte[] contractAddress;

    public ContractTransferData() {
    }

    public ContractTransferData(NulsHash orginTxHash, byte[] contractAddress) {
        this.orginTxHash = orginTxHash;
        this.contractAddress = contractAddress;
    }

    @Override
    public int size() {
        int size = 0;
        size += NulsHash.HASH_LENGTH;
        size += Address.ADDRESS_LENGTH;
        return size;
    }

    @Override
    protected void serializeToStream(NulsOutputStreamBuffer stream) throws IOException {
        stream.write(orginTxHash.getBytes());
        stream.write(contractAddress);
    }

    @Override
    public void parse(NulsByteBuffer byteBuffer) throws NulsException {
        this.orginTxHash = byteBuffer.readHash();
        this.contractAddress = byteBuffer.readBytes(Address.ADDRESS_LENGTH);
    }


    public Set<byte[]> getAddresses() {
        Set<byte[]> addressSet = new HashSet<>();
        addressSet.add(contractAddress);
        return addressSet;
    }

    @Override
    public byte[] getContractAddress() {
        return contractAddress;
    }

    public void setContractAddress(byte[] contractAddress) {
        this.contractAddress = contractAddress;
    }

    public NulsHash getOrginTxHash() {
        return orginTxHash;
    }

    public void setOrginTxHash(NulsHash orginTxHash) {
        this.orginTxHash = orginTxHash;
    }

    @Override
    public long getGasLimit() {
        return 0L;
    }

    @Override
    public byte[] getSender() {
        return null;
    }

    @Override
    public byte[] getCode() {
        return null;
    }

    @Override
    public long getPrice() {
        return 0L;
    }

    @Override
    public BigInteger getValue() {
        return BigInteger.ZERO;
    }

    @Override
    public String getMethodName() {
        return null;
    }

    @Override
    public String getMethodDesc() {
        return null;
    }

    @Override
    public String[][] getArgs() {
        return new String[0][];
    }

}
