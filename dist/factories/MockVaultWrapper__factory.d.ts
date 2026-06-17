import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockVaultWrapper, MockVaultWrapperInterface } from "../MockVaultWrapper";
type MockVaultWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockVaultWrapper__factory extends ContractFactory {
    constructor(...args: MockVaultWrapperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockVaultWrapper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockVaultWrapper;
    connect(signer: Signer): MockVaultWrapper__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506108728061001c5f395ff3fe608060405234801561000f575f5ffd5b50600436106100b9575f3560e01c806375520ffa11610072578063d3441de511610058578063d3441de5146101a8578063f90b13d4146101bb578063fc2f7cff146101e1575f5ffd5b806375520ffa1461017e5780638eb36e3d14610193575f5ffd5b806338d52e0f116100a257806338d52e0f1461012357806339107327146101475780636f307dc31461015e575f5ffd5b806303eadcfc146100bd578063158ef93e14610107575b5f5ffd5b6002546100dd9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b5f546101139060ff1681565b60405190151581526020016100fe565b5f546100dd90610100900473ffffffffffffffffffffffffffffffffffffffff1681565b61015060045481565b6040519081526020016100fe565b6001546100dd9073ffffffffffffffffffffffffffffffffffffffff1681565b61019161018c366004610420565b610201565b005b61019b610301565b6040516100fe9190610513565b6101136101b6366004610566565b61038d565b6101ce6101c9366004610566565b6103c0565b60405161ffff90911681526020016100fe565b6003546100dd9073ffffffffffffffffffffffffffffffffffffffff1681565b5f5460ff161561023d576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805473ffffffffffffffffffffffffffffffffffffffff808b16610100027fffffffffffffffffffffff00000000000000000000000000000000000000000090921691909117600190811790925581548982167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790925560028054898316908416179055600380549188169190921617905560048490558260066102e682826105ba565b50600590506102f68284836106f9565b505050505050505050565b6005805461030e9061065c565b80601f016020809104026020016040519081016040528092919081815260200182805461033a9061065c565b80156103855780601f1061035c57610100808354040283529160200191610385565b820191905f5260205f20905b81548152906001019060200180831161036857829003601f168201915b505050505081565b5f600760ff8316600481106103a4576103a461080f565b602081049091015460ff601f9092166101000a90041692915050565b5f600660ff8316600481106103d7576103d761080f565b601091828204019190066002029054906101000a900461ffff169050919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461041b575f5ffd5b919050565b5f5f5f5f5f5f5f5f888a036101c0811215610439575f5ffd5b6104428a6103f8565b985061045060208b016103f8565b975061045e60408b016103f8565b965061046c60608b016103f8565b955060808a013594506101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60820112156104a5575f5ffd5b5060a0890192506101a089013567ffffffffffffffff8111156104c6575f5ffd5b8901601f81018b136104d6575f5ffd5b803567ffffffffffffffff8111156104ec575f5ffd5b8b60208284010111156104fd575f5ffd5b989b979a50959850939692959194602001935050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b5f60208284031215610576575f5ffd5b813560ff81168114610586575f5ffd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b815f805b6004811015610602575f833561ffff81168082146105da575f5ffd5b6020959095019461ffff600485901b90811b1995909516941b939093179250506001016105be565b50825550608082015f805b600481101561064f575f83358015158114610626575f5ffd5b6020949094019360ff600384901b81811b1995909516911690931b92909217915060010161060d565b5080600184015550505050565b600181811c9082168061067057607f821691505b6020821081036106a7577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f8211156106f457805f5260205f20601f840160051c810160208510156106d25750805b601f840160051c820191505b818110156106f1575f81556001016106de565b50505b505050565b67ffffffffffffffff8311156107115761071161058d565b6107258361071f835461065c565b836106ad565b5f601f841160018114610775575f851561073f5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556106f1565b5f838152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08716915b828110156107c257868501358255602094850194600190920191016107a2565b50868210156107fd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220312d5f834632484d665b903182a9ef1a096ebd132ececf7332e210d27905d01864736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "adapter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "chainLockId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeEnabled";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeRate";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_integrator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_chainLockId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_fees";
            readonly type: "tuple";
            readonly internalType: "struct FeeConfig";
            readonly components: readonly [{
                readonly name: "rateBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "enabled";
                readonly type: "bool[4]";
                readonly internalType: "bool[4]";
            }];
        }, {
            readonly name: "_initData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialized";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "integrator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "underlying";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
    }];
    static createInterface(): MockVaultWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVaultWrapper;
}
export {};
