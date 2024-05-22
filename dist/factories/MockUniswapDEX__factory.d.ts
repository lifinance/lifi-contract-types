import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockUniswapDEX, MockUniswapDEXInterface } from "../MockUniswapDEX";
declare type MockUniswapDEXConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockUniswapDEX__factory extends ContractFactory {
    constructor(...args: MockUniswapDEXConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockUniswapDEX>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockUniswapDEX;
    connect(signer: Signer): MockUniswapDEX__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506107f9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638803dbee116100505780638803dbee146100bb57806394d5567a146100ce578063c1d8d1d9146100d757600080fd5b8063162b4d0c1461007757806338ed1739146100935780634b942e35146100a8575b600080fd5b61008060015481565b6040519081526020015b60405180910390f35b6100a66100a136600461067d565b61011c565b005b6100a66100b636600461071f565b610299565b6100a66100c936600461067d565b6103c1565b61008060025481565b6000546100f79073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008a565b60008484600081811061013157610131610757565b90506020020160208101906101469190610786565b9050610180333060015460001461015f57600154610161565b885b73ffffffffffffffffffffffffffffffffffffffff85169291906104c3565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024015b602060405180830381865afa1580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021491906107aa565b9050600254811015610265576002546040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810191909152602481018290526044015b60405180910390fd5b60025460005461028f9173ffffffffffffffffffffffffffffffffffffffff909116908690610589565b5050505050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032a91906107aa565b905081811015610370576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161025c565b50600192909255600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055600255565b6000848460008181106103d6576103d6610757565b90506020020160208101906103eb9190610786565b905073ffffffffffffffffffffffffffffffffffffffff8116156101805760008585600081811061041e5761041e610757565b90506020020160208101906104339190610786565b905061046b333060015460001461044c57600154610161565b73ffffffffffffffffffffffffffffffffffffffff841691908a6104c3565b50600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a08231906024016101d3565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080610582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c4544000000000000000000000000604482015260640161025c565b5050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015260640161025c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461066a57600080fd5b50565b803561067881610648565b919050565b60008060008060008060a0878903121561069657600080fd5b8635955060208701359450604087013567ffffffffffffffff808211156106bc57600080fd5b818901915089601f8301126106d057600080fd5b8135818111156106df57600080fd5b8a60208260051b85010111156106f457600080fd5b60208301965080955050505061070c6060880161066d565b9150608087013590509295509295509295565b60008060006060848603121561073457600080fd5b83359250602084013561074681610648565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561079857600080fd5b81356107a381610648565b9392505050565b6000602082840312156107bc57600080fd5b505191905056fea2646970667358221220ecc365342fc189e495881bd87230734699c13793057d92e243971060e5624c1564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "inputAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "outputAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "outputToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setSwapOutput";
        readonly inputs: readonly [{
            readonly name: "_inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_outputToken";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "_outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): MockUniswapDEXInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUniswapDEX;
}
export {};
