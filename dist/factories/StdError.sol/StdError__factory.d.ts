import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { StdError, StdErrorInterface } from "../../StdError.sol/StdError";
declare type StdErrorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdError__factory extends ContractFactory {
    constructor(...args: StdErrorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StdError>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StdError;
    connect(signer: Signer): StdError__factory;
    static readonly bytecode = "0x6102c961003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c8063986c5f6811610080578063b67689da11610065578063b67689da146100f8578063d160e4de14610100578063fa784a441461010857600080fd5b8063986c5f68146100e8578063b22dc54d146100f057600080fd5b806305ee8612146100b257806310332977146100d05780631de45560146100d85780638995290f146100e0575b600080fd5b6100ba610110565b6040516100c79190610227565b60405180910390f35b6100ba610197565b6100ba6101a9565b6100ba6101bb565b6100ba6101cd565b6100ba6101df565b6100ba6101f1565b6100ba610203565b6100ba610215565b604051603260248201526044015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4e487b710000000000000000000000000000000000000000000000000000000017905281565b6040516001602482015260440161011e565b6040516021602482015260440161011e565b6040516011602482015260440161011e565b6040516041602482015260440161011e565b6040516031602482015260440161011e565b6040516051602482015260440161011e565b6040516022602482015260440161011e565b6040516012602482015260440161011e565b600060208083528351808285015260005b8181101561025457858101830151858201604001528201610238565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fea2646970667358221220c842b24ccade6cbcfda3831a552879b79b86e55bbe3420c7847fd19186c0352864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "arithmeticError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "assertionError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "divisionError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "encodeStorageError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "enumConversionError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "indexOOBError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "memOverflowError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "popError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "zeroVarError";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): StdErrorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdError;
}
export {};
