import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace VmSafe {
    type FsMetadataStruct = {
        isDir: PromiseOrValue<boolean>;
        isSymlink: PromiseOrValue<boolean>;
        length: PromiseOrValue<BigNumberish>;
        readOnly: PromiseOrValue<boolean>;
        modified: PromiseOrValue<BigNumberish>;
        accessed: PromiseOrValue<BigNumberish>;
        created: PromiseOrValue<BigNumberish>;
    };
    type FsMetadataStructOutput = [
        boolean,
        boolean,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        isDir: boolean;
        isSymlink: boolean;
        length: BigNumber;
        readOnly: boolean;
        modified: BigNumber;
        accessed: BigNumber;
        created: BigNumber;
    };
    type LogStruct = {
        topics: PromiseOrValue<BytesLike>[];
        data: PromiseOrValue<BytesLike>;
        emitter: PromiseOrValue<string>;
    };
    type LogStructOutput = [string[], string, string] & {
        topics: string[];
        data: string;
        emitter: string;
    };
    type DirEntryStruct = {
        errorMessage: PromiseOrValue<string>;
        path: PromiseOrValue<string>;
        depth: PromiseOrValue<BigNumberish>;
        isDir: PromiseOrValue<boolean>;
        isSymlink: PromiseOrValue<boolean>;
    };
    type DirEntryStructOutput = [
        string,
        string,
        BigNumber,
        boolean,
        boolean
    ] & {
        errorMessage: string;
        path: string;
        depth: BigNumber;
        isDir: boolean;
        isSymlink: boolean;
    };
    type RpcStruct = {
        key: PromiseOrValue<string>;
        url: PromiseOrValue<string>;
    };
    type RpcStructOutput = [string, string] & {
        key: string;
        url: string;
    };
}
export interface VmSafeInterface extends utils.Interface {
    functions: {
        "accesses(address)": FunctionFragment;
        "addr(uint256)": FunctionFragment;
        "assume(bool)": FunctionFragment;
        "breakpoint(string)": FunctionFragment;
        "breakpoint(string,bool)": FunctionFragment;
        "broadcast()": FunctionFragment;
        "broadcast(address)": FunctionFragment;
        "broadcast(uint256)": FunctionFragment;
        "closeFile(string)": FunctionFragment;
        "createDir(string,bool)": FunctionFragment;
        "deriveKey(string,uint32)": FunctionFragment;
        "deriveKey(string,string,uint32)": FunctionFragment;
        "envAddress(string)": FunctionFragment;
        "envAddress(string,string)": FunctionFragment;
        "envBool(string)": FunctionFragment;
        "envBool(string,string)": FunctionFragment;
        "envBytes(string)": FunctionFragment;
        "envBytes(string,string)": FunctionFragment;
        "envBytes32(string,string)": FunctionFragment;
        "envBytes32(string)": FunctionFragment;
        "envInt(string,string)": FunctionFragment;
        "envInt(string)": FunctionFragment;
        "envOr(string,string,bytes32[])": FunctionFragment;
        "envOr(string,string,int256[])": FunctionFragment;
        "envOr(string,bool)": FunctionFragment;
        "envOr(string,address)": FunctionFragment;
        "envOr(string,uint256)": FunctionFragment;
        "envOr(string,string,bytes[])": FunctionFragment;
        "envOr(string,string,uint256[])": FunctionFragment;
        "envOr(string,string,string[])": FunctionFragment;
        "envOr(string,bytes)": FunctionFragment;
        "envOr(string,bytes32)": FunctionFragment;
        "envOr(string,int256)": FunctionFragment;
        "envOr(string,string,address[])": FunctionFragment;
        "envOr(string,string)": FunctionFragment;
        "envOr(string,string,bool[])": FunctionFragment;
        "envString(string,string)": FunctionFragment;
        "envString(string)": FunctionFragment;
        "envUint(string)": FunctionFragment;
        "envUint(string,string)": FunctionFragment;
        "ffi(string[])": FunctionFragment;
        "fsMetadata(string)": FunctionFragment;
        "getCode(string)": FunctionFragment;
        "getDeployedCode(string)": FunctionFragment;
        "getLabel(address)": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "getRecordedLogs()": FunctionFragment;
        "label(address,string)": FunctionFragment;
        "load(address,bytes32)": FunctionFragment;
        "parseAddress(string)": FunctionFragment;
        "parseBool(string)": FunctionFragment;
        "parseBytes(string)": FunctionFragment;
        "parseBytes32(string)": FunctionFragment;
        "parseInt(string)": FunctionFragment;
        "parseJson(string)": FunctionFragment;
        "parseJson(string,string)": FunctionFragment;
        "parseJsonAddress(string,string)": FunctionFragment;
        "parseJsonAddressArray(string,string)": FunctionFragment;
        "parseJsonBool(string,string)": FunctionFragment;
        "parseJsonBoolArray(string,string)": FunctionFragment;
        "parseJsonBytes(string,string)": FunctionFragment;
        "parseJsonBytes32(string,string)": FunctionFragment;
        "parseJsonBytes32Array(string,string)": FunctionFragment;
        "parseJsonBytesArray(string,string)": FunctionFragment;
        "parseJsonInt(string,string)": FunctionFragment;
        "parseJsonIntArray(string,string)": FunctionFragment;
        "parseJsonString(string,string)": FunctionFragment;
        "parseJsonStringArray(string,string)": FunctionFragment;
        "parseJsonUint(string,string)": FunctionFragment;
        "parseJsonUintArray(string,string)": FunctionFragment;
        "parseUint(string)": FunctionFragment;
        "pauseGasMetering()": FunctionFragment;
        "projectRoot()": FunctionFragment;
        "readDir(string,uint64)": FunctionFragment;
        "readDir(string,uint64,bool)": FunctionFragment;
        "readDir(string)": FunctionFragment;
        "readFile(string)": FunctionFragment;
        "readFileBinary(string)": FunctionFragment;
        "readLine(string)": FunctionFragment;
        "readLink(string)": FunctionFragment;
        "record()": FunctionFragment;
        "recordLogs()": FunctionFragment;
        "rememberKey(uint256)": FunctionFragment;
        "removeDir(string,bool)": FunctionFragment;
        "removeFile(string)": FunctionFragment;
        "resumeGasMetering()": FunctionFragment;
        "rpcUrl(string)": FunctionFragment;
        "rpcUrlStructs()": FunctionFragment;
        "rpcUrls()": FunctionFragment;
        "serializeAddress(string,string,address[])": FunctionFragment;
        "serializeAddress(string,string,address)": FunctionFragment;
        "serializeBool(string,string,bool[])": FunctionFragment;
        "serializeBool(string,string,bool)": FunctionFragment;
        "serializeBytes(string,string,bytes[])": FunctionFragment;
        "serializeBytes(string,string,bytes)": FunctionFragment;
        "serializeBytes32(string,string,bytes32[])": FunctionFragment;
        "serializeBytes32(string,string,bytes32)": FunctionFragment;
        "serializeInt(string,string,int256)": FunctionFragment;
        "serializeInt(string,string,int256[])": FunctionFragment;
        "serializeString(string,string,string[])": FunctionFragment;
        "serializeString(string,string,string)": FunctionFragment;
        "serializeUint(string,string,uint256)": FunctionFragment;
        "serializeUint(string,string,uint256[])": FunctionFragment;
        "setEnv(string,string)": FunctionFragment;
        "sign(uint256,bytes32)": FunctionFragment;
        "startBroadcast()": FunctionFragment;
        "startBroadcast(address)": FunctionFragment;
        "startBroadcast(uint256)": FunctionFragment;
        "stopBroadcast()": FunctionFragment;
        "toString(address)": FunctionFragment;
        "toString(uint256)": FunctionFragment;
        "toString(bytes)": FunctionFragment;
        "toString(bool)": FunctionFragment;
        "toString(int256)": FunctionFragment;
        "toString(bytes32)": FunctionFragment;
        "writeFile(string,string)": FunctionFragment;
        "writeFileBinary(string,bytes)": FunctionFragment;
        "writeJson(string,string,string)": FunctionFragment;
        "writeJson(string,string)": FunctionFragment;
        "writeLine(string,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accesses" | "addr" | "assume" | "breakpoint(string)" | "breakpoint(string,bool)" | "broadcast()" | "broadcast(address)" | "broadcast(uint256)" | "closeFile" | "createDir" | "deriveKey(string,uint32)" | "deriveKey(string,string,uint32)" | "envAddress(string)" | "envAddress(string,string)" | "envBool(string)" | "envBool(string,string)" | "envBytes(string)" | "envBytes(string,string)" | "envBytes32(string,string)" | "envBytes32(string)" | "envInt(string,string)" | "envInt(string)" | "envOr(string,string,bytes32[])" | "envOr(string,string,int256[])" | "envOr(string,bool)" | "envOr(string,address)" | "envOr(string,uint256)" | "envOr(string,string,bytes[])" | "envOr(string,string,uint256[])" | "envOr(string,string,string[])" | "envOr(string,bytes)" | "envOr(string,bytes32)" | "envOr(string,int256)" | "envOr(string,string,address[])" | "envOr(string,string)" | "envOr(string,string,bool[])" | "envString(string,string)" | "envString(string)" | "envUint(string)" | "envUint(string,string)" | "ffi" | "fsMetadata" | "getCode" | "getDeployedCode" | "getLabel" | "getNonce" | "getRecordedLogs" | "label" | "load" | "parseAddress" | "parseBool" | "parseBytes" | "parseBytes32" | "parseInt" | "parseJson(string)" | "parseJson(string,string)" | "parseJsonAddress" | "parseJsonAddressArray" | "parseJsonBool" | "parseJsonBoolArray" | "parseJsonBytes" | "parseJsonBytes32" | "parseJsonBytes32Array" | "parseJsonBytesArray" | "parseJsonInt" | "parseJsonIntArray" | "parseJsonString" | "parseJsonStringArray" | "parseJsonUint" | "parseJsonUintArray" | "parseUint" | "pauseGasMetering" | "projectRoot" | "readDir(string,uint64)" | "readDir(string,uint64,bool)" | "readDir(string)" | "readFile" | "readFileBinary" | "readLine" | "readLink" | "record" | "recordLogs" | "rememberKey" | "removeDir" | "removeFile" | "resumeGasMetering" | "rpcUrl" | "rpcUrlStructs" | "rpcUrls" | "serializeAddress(string,string,address[])" | "serializeAddress(string,string,address)" | "serializeBool(string,string,bool[])" | "serializeBool(string,string,bool)" | "serializeBytes(string,string,bytes[])" | "serializeBytes(string,string,bytes)" | "serializeBytes32(string,string,bytes32[])" | "serializeBytes32(string,string,bytes32)" | "serializeInt(string,string,int256)" | "serializeInt(string,string,int256[])" | "serializeString(string,string,string[])" | "serializeString(string,string,string)" | "serializeUint(string,string,uint256)" | "serializeUint(string,string,uint256[])" | "setEnv" | "sign" | "startBroadcast()" | "startBroadcast(address)" | "startBroadcast(uint256)" | "stopBroadcast" | "toString(address)" | "toString(uint256)" | "toString(bytes)" | "toString(bool)" | "toString(int256)" | "toString(bytes32)" | "writeFile" | "writeFileBinary" | "writeJson(string,string,string)" | "writeJson(string,string)" | "writeLine"): FunctionFragment;
    encodeFunctionData(functionFragment: "accesses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addr", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "assume", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "breakpoint(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "breakpoint(string,bool)", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "broadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "broadcast(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "broadcast(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "closeFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "createDir", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "envAddress(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envAddress(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBool(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBool(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes32(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envBytes32(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envInt(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envInt(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes32[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,int256[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,bool)", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "envOr(string,address)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envOr(string,uint256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,uint256[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,string[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes)", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes32)", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "envOr(string,int256)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,address[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "envOr(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bool[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>[]
    ]): string;
    encodeFunctionData(functionFragment: "envString(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envString(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envUint(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "envUint(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ffi", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "fsMetadata", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDeployedCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLabel", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRecordedLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "label", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "load", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "parseAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBool", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBytes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseBytes32", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseInt", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJson(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJson(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonAddress", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonAddressArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBool", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBoolArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32Array", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonBytesArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonInt", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonIntArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonString", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonStringArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonUint", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseJsonUintArray", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "parseUint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pauseGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "projectRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64)", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64,bool)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "readDir(string)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readFileBinary", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readLine", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "readLink", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "record", values?: undefined): string;
    encodeFunctionData(functionFragment: "recordLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rememberKey", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "removeDir", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "removeFile", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resumeGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrl", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rpcUrlStructs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrls", values?: undefined): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256[])", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setEnv", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "sign", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "startBroadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "startBroadcast(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "stopBroadcast", values?: undefined): string;
    encodeFunctionData(functionFragment: "toString(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "toString(uint256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toString(bytes)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "toString(bool)", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "toString(int256)", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "toString(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "writeFile", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "writeFileBinary", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string,string)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string)", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "writeLine", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fsMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLabel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecordedLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddressArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBoolArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32Array", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytesArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonIntArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonStringArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUintArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "projectRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrlStructs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeLine", data: BytesLike): Result;
    events: {};
}
export interface VmSafe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VmSafeInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        accesses(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addr(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            keyAddr: string;
        }>;
        assume(condition: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[void]>;
        "breakpoint(string)"(char: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "breakpoint(string,bool)"(char: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "broadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "deriveKey(string,uint32)"(mnemonic: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        "deriveKey(string,string,uint32)"(mnemonic: PromiseOrValue<string>, derivationPath: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        "envAddress(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envAddress(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBool(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            value: boolean;
        }>;
        "envBool(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean[]] & {
            value: boolean[];
        }>;
        "envBytes(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envBytes(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBytes32(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBytes32(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envInt(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        "envInt(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envOr(string,string,bytes32[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,int256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,bool)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,address)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,uint256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,bytes[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,uint256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,string[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,bytes)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,bytes32)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,int256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,address[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envOr(string,string,bool[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "envString(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envString(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envUint(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envUint(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        ffi(commandInput: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fsMetadata(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            VmSafe.FsMetadataStructOutput
        ] & {
            metadata: VmSafe.FsMetadataStructOutput;
        }>;
        getCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            creationBytecode: string;
        }>;
        getDeployedCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            runtimeBytecode: string;
        }>;
        getLabel(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getNonce(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        label(account: PromiseOrValue<string>, newLabel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        load(target: PromiseOrValue<string>, slot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        parseAddress(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseBool(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            parsedValue: boolean;
        }>;
        parseBytes(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseBytes32(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseInt(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            parsedValue: BigNumber;
        }>;
        "parseJson(string)"(json: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        "parseJson(string,string)"(json: PromiseOrValue<string>, key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        parseJsonAddress(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonAddressArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBool(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBoolArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBytes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBytes32(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBytes32Array(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonBytesArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonInt(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonIntArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonString(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonStringArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonUint(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseJsonUintArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        parseUint(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            parsedValue: BigNumber;
        }>;
        pauseGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        projectRoot(overrides?: CallOverrides): Promise<[string] & {
            path: string;
        }>;
        "readDir(string,uint64)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        "readDir(string,uint64,bool)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, followLinks: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        "readDir(string)"(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        readFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        readFileBinary(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        readLine(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            line: string;
        }>;
        readLink(linkPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            targetPath: string;
        }>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rememberKey(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resumeGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rpcUrl(rpcAlias: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            json: string;
        }>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<[VmSafe.RpcStructOutput[]] & {
            urls: VmSafe.RpcStructOutput[];
        }>;
        rpcUrls(overrides?: CallOverrides): Promise<[[string, string][]] & {
            urls: [string, string][];
        }>;
        "serializeAddress(string,string,address[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeAddress(string,string,address)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBool(string,string,bool[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBool(string,string,bool)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBytes(string,string,bytes[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBytes(string,string,bytes)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeBytes32(string,string,bytes32)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeInt(string,string,int256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeInt(string,string,int256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeString(string,string,string[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeString(string,string,string)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeUint(string,string,uint256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "serializeUint(string,string,uint256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEnv(name: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sign(privateKey: PromiseOrValue<BigNumberish>, digest: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startBroadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "startBroadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "toString(address)"(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(uint256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bytes)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bool)"(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(int256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bytes32)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        writeFile(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        writeFileBinary(path: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "writeJson(string,string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "writeJson(string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        writeLine(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accesses(target: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addr(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    assume(condition: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    "breakpoint(string)"(char: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "breakpoint(string,bool)"(char: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "broadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "deriveKey(string,uint32)"(mnemonic: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "deriveKey(string,string,uint32)"(mnemonic: PromiseOrValue<string>, derivationPath: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    "envAddress(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "envAddress(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    "envBool(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    "envBool(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
    "envBytes(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "envBytes(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    "envBytes32(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    "envBytes32(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "envInt(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    "envInt(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "envOr(string,string,bytes32[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,int256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,bool)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,address)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,uint256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,bytes[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,uint256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,string[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,bytes)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,bytes32)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,int256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,address[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envOr(string,string,bool[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "envString(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    "envString(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "envUint(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "envUint(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    ffi(commandInput: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fsMetadata(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VmSafe.FsMetadataStructOutput>;
    getCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getDeployedCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getLabel(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getNonce(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRecordedLogs(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    label(account: PromiseOrValue<string>, newLabel: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    load(target: PromiseOrValue<string>, slot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    parseAddress(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    parseBool(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    parseBytes(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    parseBytes32(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    parseInt(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    "parseJson(string)"(json: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "parseJson(string,string)"(json: PromiseOrValue<string>, key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    parseJsonAddress(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonAddressArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBool(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBoolArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBytes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBytes32(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBytes32Array(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonBytesArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonInt(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonIntArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonString(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonStringArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonUint(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseJsonUintArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    parseUint(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    pauseGasMetering(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    projectRoot(overrides?: CallOverrides): Promise<string>;
    "readDir(string,uint64)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    "readDir(string,uint64,bool)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, followLinks: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    "readDir(string)"(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    readFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    readFileBinary(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    readLine(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    readLink(linkPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    record(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recordLogs(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rememberKey(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resumeGasMetering(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rpcUrl(rpcAlias: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    rpcUrlStructs(overrides?: CallOverrides): Promise<VmSafe.RpcStructOutput[]>;
    rpcUrls(overrides?: CallOverrides): Promise<[string, string][]>;
    "serializeAddress(string,string,address[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeAddress(string,string,address)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBool(string,string,bool[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBool(string,string,bool)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBytes(string,string,bytes[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBytes(string,string,bytes)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBytes32(string,string,bytes32[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeBytes32(string,string,bytes32)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeInt(string,string,int256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeInt(string,string,int256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeString(string,string,string[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeString(string,string,string)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeUint(string,string,uint256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "serializeUint(string,string,uint256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEnv(name: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sign(privateKey: PromiseOrValue<BigNumberish>, digest: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, string, string] & {
        v: number;
        r: string;
        s: string;
    }>;
    "startBroadcast()"(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startBroadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "startBroadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stopBroadcast(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "toString(address)"(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    "toString(uint256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    "toString(bytes)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    "toString(bool)"(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    "toString(int256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    "toString(bytes32)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    writeFile(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    writeFileBinary(path: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "writeJson(string,string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "writeJson(string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    writeLine(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accesses(target: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string[],
            string[]
        ] & {
            readSlots: string[];
            writeSlots: string[];
        }>;
        addr(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        assume(condition: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "breakpoint(string)"(char: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "breakpoint(string,bool)"(char: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "broadcast()"(overrides?: CallOverrides): Promise<void>;
        "broadcast(address)"(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "broadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        closeFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        createDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "deriveKey(string,uint32)"(mnemonic: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(mnemonic: PromiseOrValue<string>, derivationPath: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "envAddress(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envAddress(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBool(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "envBool(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
        "envBytes(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envBytes(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envInt(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        "envInt(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes32[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string,int256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        "envOr(string,bool)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        "envOr(string,address)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envOr(string,uint256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string,uint256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        "envOr(string,string,string[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,bytes)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "envOr(string,bytes32)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "envOr(string,int256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,address[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envOr(string,string,bool[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<boolean[]>;
        "envString(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        "envString(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "envUint(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        ffi(commandInput: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        fsMetadata(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VmSafe.FsMetadataStructOutput>;
        getCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getDeployedCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getLabel(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getNonce(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecordedLogs(overrides?: CallOverrides): Promise<VmSafe.LogStructOutput[]>;
        label(account: PromiseOrValue<string>, newLabel: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        load(target: PromiseOrValue<string>, slot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        parseAddress(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseBool(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        parseBytes(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseBytes32(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseInt(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string)"(json: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "parseJson(string,string)"(json: PromiseOrValue<string>, key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseJsonAddress(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseJsonAddressArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        parseJsonBool(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        parseJsonBoolArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
        parseJsonBytes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseJsonBytes32(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseJsonBytes32Array(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        parseJsonBytesArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        parseJsonInt(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonIntArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        parseJsonString(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        parseJsonStringArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        parseJsonUint(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonUintArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        parseUint(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pauseGasMetering(overrides?: CallOverrides): Promise<void>;
        projectRoot(overrides?: CallOverrides): Promise<string>;
        "readDir(string,uint64)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        "readDir(string,uint64,bool)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, followLinks: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        "readDir(string)"(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        readFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        readFileBinary(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        readLine(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        readLink(linkPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        record(overrides?: CallOverrides): Promise<void>;
        recordLogs(overrides?: CallOverrides): Promise<void>;
        rememberKey(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        removeDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        removeFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        resumeGasMetering(overrides?: CallOverrides): Promise<void>;
        rpcUrl(rpcAlias: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<VmSafe.RpcStructOutput[]>;
        rpcUrls(overrides?: CallOverrides): Promise<[string, string][]>;
        "serializeAddress(string,string,address[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        "serializeAddress(string,string,address)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "serializeBool(string,string,bool[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<string>;
        "serializeBool(string,string,bool)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        "serializeBytes(string,string,bytes[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
        "serializeBytes(string,string,bytes)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<string>;
        "serializeBytes32(string,string,bytes32)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "serializeInt(string,string,int256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "serializeInt(string,string,int256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<string>;
        "serializeString(string,string,string[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<string>;
        "serializeString(string,string,string)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "serializeUint(string,string,uint256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "serializeUint(string,string,uint256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<string>;
        setEnv(name: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        sign(privateKey: PromiseOrValue<BigNumberish>, digest: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "startBroadcast()"(overrides?: CallOverrides): Promise<void>;
        "startBroadcast(address)"(signer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "startBroadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        stopBroadcast(overrides?: CallOverrides): Promise<void>;
        "toString(address)"(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        "toString(uint256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "toString(bytes)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "toString(bool)"(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        "toString(int256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "toString(bytes32)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        writeFile(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        writeFileBinary(path: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "writeJson(string,string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        "writeJson(string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        writeLine(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        accesses(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addr(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        assume(condition: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "breakpoint(string)"(char: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "breakpoint(string,bool)"(char: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "broadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "deriveKey(string,uint32)"(mnemonic: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(mnemonic: PromiseOrValue<string>, derivationPath: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "envAddress(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envAddress(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBool(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBool(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes32(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes32(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envInt(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envInt(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes32[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,int256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,bool)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,address)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,uint256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,bytes[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,uint256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,string[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,bytes)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,bytes32)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,int256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,address[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envOr(string,string,bool[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "envString(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envString(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        ffi(commandInput: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fsMetadata(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDeployedCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLabel(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getNonce(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        label(account: PromiseOrValue<string>, newLabel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        load(target: PromiseOrValue<string>, slot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        parseAddress(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseBool(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseBytes(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseBytes32(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseInt(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string)"(json: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string,string)"(json: PromiseOrValue<string>, key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonAddress(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonAddressArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBool(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBoolArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBytes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBytes32(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBytes32Array(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonBytesArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonInt(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonIntArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonString(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonStringArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonUint(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseJsonUintArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        parseUint(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pauseGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        projectRoot(overrides?: CallOverrides): Promise<BigNumber>;
        "readDir(string,uint64)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "readDir(string,uint64,bool)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, followLinks: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "readDir(string)"(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        readFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        readFileBinary(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        readLine(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        readLink(linkPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rememberKey(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resumeGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rpcUrl(rpcAlias: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<BigNumber>;
        rpcUrls(overrides?: CallOverrides): Promise<BigNumber>;
        "serializeAddress(string,string,address[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeAddress(string,string,address)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBool(string,string,bool[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBool(string,string,bool)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBytes(string,string,bytes[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBytes(string,string,bytes)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeBytes32(string,string,bytes32)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeInt(string,string,int256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeInt(string,string,int256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeString(string,string,string[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeString(string,string,string)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeUint(string,string,uint256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "serializeUint(string,string,uint256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEnv(name: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sign(privateKey: PromiseOrValue<BigNumberish>, digest: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startBroadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "startBroadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "toString(address)"(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(uint256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bytes)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bool)"(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(int256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bytes32)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        writeFile(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        writeFileBinary(path: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "writeJson(string,string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "writeJson(string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        writeLine(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accesses(target: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addr(privateKey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assume(condition: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "breakpoint(string)"(char: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "breakpoint(string,bool)"(char: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "broadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "deriveKey(string,uint32)"(mnemonic: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deriveKey(string,string,uint32)"(mnemonic: PromiseOrValue<string>, derivationPath: PromiseOrValue<string>, index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envAddress(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envAddress(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBool(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBool(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes32(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes32(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envInt(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envInt(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,bytes32[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,int256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,bool)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,address)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,uint256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,bytes[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,uint256[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,string[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,bytes)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,bytes32)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,int256)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,address[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string)"(name: PromiseOrValue<string>, defaultValue: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envOr(string,string,bool[])"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, defaultValue: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "envString(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envString(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envUint(string)"(name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envUint(string,string)"(name: PromiseOrValue<string>, delim: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ffi(commandInput: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fsMetadata(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeployedCode(artifactPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLabel(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getNonce(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRecordedLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        label(account: PromiseOrValue<string>, newLabel: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        load(target: PromiseOrValue<string>, slot: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseAddress(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBool(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBytes(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBytes32(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseInt(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJson(string)"(json: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJson(string,string)"(json: PromiseOrValue<string>, key: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonAddress(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonAddressArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBool(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBoolArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBytes(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBytes32(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBytes32Array(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonBytesArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonInt(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonIntArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonString(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonStringArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonUint(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseJsonUintArray(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        parseUint(stringifiedValue: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        projectRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "readDir(string,uint64)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "readDir(string,uint64,bool)"(path: PromiseOrValue<string>, maxDepth: PromiseOrValue<BigNumberish>, followLinks: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "readDir(string)"(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readFile(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readFileBinary(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readLine(path: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readLink(linkPath: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        record(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rememberKey(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeDir(path: PromiseOrValue<string>, recursive: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeFile(path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resumeGasMetering(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rpcUrl(rpcAlias: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rpcUrls(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "serializeAddress(string,string,address[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeAddress(string,string,address)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBool(string,string,bool[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBool(string,string,bool)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBytes(string,string,bytes[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBytes(string,string,bytes)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeBytes32(string,string,bytes32)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeInt(string,string,int256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeInt(string,string,int256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeString(string,string,string[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeString(string,string,string)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeUint(string,string,uint256)"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "serializeUint(string,string,uint256[])"(objectKey: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEnv(name: PromiseOrValue<string>, value: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sign(privateKey: PromiseOrValue<BigNumberish>, digest: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(address)"(signer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(uint256)"(privateKey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "toString(address)"(value: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(uint256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bytes)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bool)"(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(int256)"(value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bytes32)"(value: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        writeFile(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        writeFileBinary(path: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "writeJson(string,string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, valueKey: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "writeJson(string,string)"(json: PromiseOrValue<string>, path: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        writeLine(path: PromiseOrValue<string>, data: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
