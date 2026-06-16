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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061081c8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061009f575f3560e01c80636f307dc311610072578063d3441de511610058578063d3441de51461016e578063f90b13d414610181578063fc2f7cff146101a7575f5ffd5b80636f307dc3146101395780638eb36e3d14610159575f5ffd5b80630fedbeab146100a3578063158ef93e146100b857806338d52e0f146100d95780633910732714610122575b5f5ffd5b6100b66100b13660046103d8565b6101c7565b005b5f546100c49060ff1681565b60405190151581526020015b60405180910390f35b5f546100fd90610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d0565b61012b60035481565b6040519081526020016100d0565b6001546100fd9073ffffffffffffffffffffffffffffffffffffffff1681565b6101616102b9565b6040516100d091906104bd565b6100c461017c366004610510565b610345565b61019461018f366004610510565b610378565b60405161ffff90911681526020016100d0565b6002546100fd9073ffffffffffffffffffffffffffffffffffffffff1681565b5f5460ff1615610203576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805473ffffffffffffffffffffffffffffffffffffffff808a16610100027fffffffffffffffffffffff00000000000000000000000000000000000000000090921691909117600190811790925581548882167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179092556002805491881691909216179055600384905582600561029f8282610564565b50600490506102af8284836106a3565b5050505050505050565b600480546102c690610606565b80601f01602080910402602001604051908101604052809291908181526020018280546102f290610606565b801561033d5780601f106103145761010080835404028352916020019161033d565b820191905f5260205f20905b81548152906001019060200180831161032057829003601f168201915b505050505081565b5f600660ff83166004811061035c5761035c6107b9565b602081049091015460ff601f9092166101000a90041692915050565b5f600560ff83166004811061038f5761038f6107b9565b601091828204019190066002029054906101000a900461ffff169050919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103d3575f5ffd5b919050565b5f5f5f5f5f5f5f8789036101a08112156103f0575f5ffd5b6103f9896103b0565b975061040760208a016103b0565b965061041560408a016103b0565b9550606089013594506101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808201121561044e575f5ffd5b5060808801925061018088013567ffffffffffffffff81111561046f575f5ffd5b8801601f81018a1361047f575f5ffd5b803567ffffffffffffffff811115610495575f5ffd5b8a60208284010111156104a6575f5ffd5b602082019350809250505092959891949750929550565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b5f60208284031215610520575f5ffd5b813560ff81168114610530575f5ffd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b815f805b60048110156105ac575f833561ffff8116808214610584575f5ffd5b6020959095019461ffff600485901b90811b1995909516941b93909317925050600101610568565b50825550608082015f805b60048110156105f9575f833580151581146105d0575f5ffd5b6020949094019360ff600384901b81811b1995909516911690931b9290921791506001016105b7565b5080600184015550505050565b600181811c9082168061061a57607f821691505b602082108103610651577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f82111561069e57805f5260205f20601f840160051c8101602085101561067c5750805b601f840160051c820191505b8181101561069b575f8155600101610688565b50505b505050565b67ffffffffffffffff8311156106bb576106bb610537565b6106cf836106c98354610606565b83610657565b5f601f84116001811461071f575f85156106e95750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561069b565b5f838152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08716915b8281101561076c578685013582556020948501946001909201910161074c565b50868210156107a7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220c4ea16fcde641138982bf242fd7494450a5d9d481068f42ddb99825862495e0b64736f6c634300081d0033";
    static readonly abi: readonly [{
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
