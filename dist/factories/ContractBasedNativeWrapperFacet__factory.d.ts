import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ContractBasedNativeWrapperFacet, ContractBasedNativeWrapperFacetInterface } from "../ContractBasedNativeWrapperFacet";
type ContractBasedNativeWrapperFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractBasedNativeWrapperFacet__factory extends ContractFactory {
    constructor(...args: ContractBasedNativeWrapperFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractBasedNativeWrapperFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ContractBasedNativeWrapperFacet;
    connect(signer: Signer): ContractBasedNativeWrapperFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506104ce8061001c5f395ff3fe608060405260043610610028575f3560e01c80633924d7e61461002c578063c14757f414610041575b5f5ffd5b61003f61003a366004610380565b610054565b005b61003f61004f366004610380565b6100f5565b83516040805160208088018252928701830192810192909252818101905280518051601482018084525160289092018352606090811c91901c816100c4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811630146100ec576100ec828286610155565b50505050505050565b602084015160601c3373ffffffffffffffffffffffffffffffffffffffff85160361012657610126833330856101c8565b73ffffffffffffffffffffffffffffffffffffffff8116301461014e5761014e838284610155565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff82166101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101c373ffffffffffffffffffffffffffffffffffffffff8416838361028a565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610215576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610262576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028473ffffffffffffffffffffffffffffffffffffffff85168484846102d3565b50505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166102ca576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661031e57637939f4245f526004601cfd5b5f60605260405250505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461037b575f5ffd5b919050565b5f5f5f5f60808587031215610393575f5ffd5b843567ffffffffffffffff8111156103a9575f5ffd5b8501601f810187136103b9575f5ffd5b803567ffffffffffffffff8111156103d3576103d361032b565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff8211171561043f5761043f61032b565b604052818152828201602001891015610456575f5ffd5b816020840160208301375f6020838301015280965050505061047a60208601610358565b925061048860408601610358565b939692955092936060013592505056fea264697066735822122081440ed878e07b9145600fad7baa874cd82141bf52ecc83f403a8934322ed31364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "unwrapContractBasedNative";
        readonly inputs: readonly [{
            readonly name: "swapData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrapContractBasedNative";
        readonly inputs: readonly [{
            readonly name: "swapData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }];
    static createInterface(): ContractBasedNativeWrapperFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractBasedNativeWrapperFacet;
}
export {};
