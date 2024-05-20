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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506106e3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638803dbee116100505780638803dbee1461009357806394d5567a146100bb578063c1d8d1d9146100c457600080fd5b8063162b4d0c1461007757806338ed1739146100935780634b942e35146100a8575b600080fd5b61008060015481565b6040519081526020015b60405180910390f35b6100a66100a1366004610567565b610109565b005b6100a66100b6366004610609565b610285565b61008060025481565b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008a565b60008484600081811061011e5761011e610641565b90506020020160208101906101339190610670565b905061016d333060015460001461014c5760015461014e565b885b73ffffffffffffffffffffffffffffffffffffffff85169291906103ad565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102009190610694565b9050600254811015610251576002546040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810191909152602481018290526044015b60405180910390fd5b60025460005461027b9173ffffffffffffffffffffffffffffffffffffffff909116908690610473565b5050505050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156102f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103169190610694565b90508181101561035c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610248565b50600192909255600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055600255565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610248565b5050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061052c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610248565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461055457600080fd5b50565b803561056281610532565b919050565b60008060008060008060a0878903121561058057600080fd5b8635955060208701359450604087013567ffffffffffffffff808211156105a657600080fd5b818901915089601f8301126105ba57600080fd5b8135818111156105c957600080fd5b8a60208260051b85010111156105de57600080fd5b6020830196508095505050506105f660608801610557565b9150608087013590509295509295509295565b60008060006060848603121561061e57600080fd5b83359250602084013561063081610532565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561068257600080fd5b813561068d81610532565b9392505050565b6000602082840312156106a657600080fd5b505191905056fea264697066735822122079d79b50a29694e784b3d02e5f0150794e26617bf6328adb8f9c2625eb6a992864736f6c63430008110033";
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
