import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestViolationsNaming, TestViolationsNamingInterface } from "../../TestViolationsNaming.sol/TestViolationsNaming";
type TestViolationsNamingConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestViolationsNaming__factory extends ContractFactory {
    constructor(...args: TestViolationsNamingConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestViolationsNaming>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestViolationsNaming;
    connect(signer: Signer): TestViolationsNaming__factory;
    static readonly bytecode = "0x60a06040526101236080523480156014575f5ffd5b506080516102d361002c5f395f608c01526102d35ff3fe608060405234801561000f575f5ffd5b506004361061004a575f3560e01c80635d1149ff1461004e5780638d9e29ed14610069578063a5fee8e514610087578063f6bd2841146100d3575b5f5ffd5b610056606481565b6040519081526020015b60405180910390f35b61007a610077366004610114565b90565b6040516100609190610204565b6100ae7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610060565b6100e56100e1366004610257565b5050565b005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215610124575f5ffd5b813567ffffffffffffffff81111561013a575f5ffd5b8201601f8101841361014a575f5ffd5b803567ffffffffffffffff811115610164576101646100e7565b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160116810181811067ffffffffffffffff821117156101d0576101d06100e7565b6040528181528282016020018610156101e7575f5ffd5b816020840160208301375f91810160200191909152949350505050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b5f5f60408385031215610268575f5ffd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff81168114610292575f5ffd5b80915050925092905056fea264697066735822122035edba4a57d999e1092792b3a10f3acdcf0c3134be658c3f8f7d683936197d4864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "anotherFunction";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "testConstant";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "testFunction";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "testImmutable";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): TestViolationsNamingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestViolationsNaming;
}
export {};
