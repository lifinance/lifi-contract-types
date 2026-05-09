import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { LidoWrapper, LidoWrapperInterface } from "../../LidoWrapper.sol/LidoWrapper";
type LidoWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LidoWrapper__factory extends ContractFactory {
    constructor(...args: LidoWrapperConstructorParams);
    deploy(_stETHAddress: PromiseOrValue<string>, _wstETHAddress: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LidoWrapper>;
    getDeployTransaction(_stETHAddress: PromiseOrValue<string>, _wstETHAddress: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LidoWrapper;
    connect(signer: Signer): LidoWrapper__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051610e50380380610e5083398101604081905261002e9161018d565b5f80546001600160a01b0319166001600160a01b03838116919091179091558316158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03808416608052821660a0525f1946016100c657604051638bb9ffc760e01b815260040160405180910390fd5b60805160a0516100e3916001600160a01b03909116905f196100eb565b5050506101cd565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610169575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661016957633e3f8f735f526004601cfd5b5f603452505050565b80516001600160a01b0381168114610188575f5ffd5b919050565b5f5f5f6060848603121561019f575f5ffd5b6101a884610172565b92506101b660208501610172565b91506101c460408501610172565b90509250925092565b60805160a051610c3161021f5f395f818161019e01528181610540015261065601525f8181610110015281816103b30152818161040a015281816104ba015281816106ac01526107320152610c315ff3fe608060405234801561000f575f5ffd5b50600436106100c4575f3560e01c80638da5cb5b1161007d578063a96bb86a11610058578063a96bb86a14610199578063e30c3978146101c0578063f2fde38b146101e0575f5ffd5b80638da5cb5b1461015f5780639f5fa0281461017e578063a816ca9214610186575f5ffd5b806324dd6483116100ad57806324dd6483146100e5578063338346d21461010b5780637200b82914610157575f5ffd5b806301e33667146100c857806323452b9c146100dd575b5f5ffd5b6100db6100d6366004610b6d565b6101f3565b005b6100db6102e4565b6100f86100f3366004610bab565b6103ad565b6040519081526020015b60405180910390f35b6101327f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610102565b6100db61056c565b5f546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100f8600181565b6100f8610194366004610bab565b610650565b6101327f000000000000000000000000000000000000000000000000000000000000000081565b6001546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100db6101ee366004610bc2565b61075d565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610243576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f0361027c576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102878383836108b9565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610334576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610383576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f6103da7f00000000000000000000000000000000000000000000000000000000000000003330856108ee565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610464573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104889190610be4565b6040517fde0e9a3e000000000000000000000000000000000000000000000000000000008152600481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063de0e9a3e906024016020604051808303815f875af1158015610515573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105399190610be4565b91506105667f000000000000000000000000000000000000000000000000000000000000000033846109b0565b50919050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105be576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f61067d7f00000000000000000000000000000000000000000000000000000000000000003330856108ee565b6040517fea598cb0000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ea598cb0906024016020604051808303815f875af1158015610707573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061072b9190610be4565b90506107587f000000000000000000000000000000000000000000000000000000000000000033836109b0565b919050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146107ad576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107fa576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610849576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff83166108e3576108de8282610a1e565b505050565b6108de8383836109b0565b73ffffffffffffffffffffffffffffffffffffffff841661093b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610988576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109aa73ffffffffffffffffffffffffffffffffffffffff8516848484610a8f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166109fd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108de73ffffffffffffffffffffffffffffffffffffffff84168383610ae7565b73ffffffffffffffffffffffffffffffffffffffff8216610a6b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8b73ffffffffffffffffffffffffffffffffffffffff831682610b30565b5050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ada57637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610b27576390b8ec185f526004601cfd5b5f603452505050565b5f385f3884865af1610a8b5763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610b6a575f5ffd5b50565b5f5f5f60608486031215610b7f575f5ffd5b8335610b8a81610b49565b92506020840135610b9a81610b49565b929592945050506040919091013590565b5f60208284031215610bbb575f5ffd5b5035919050565b5f60208284031215610bd2575f5ffd5b8135610bdd81610b49565b9392505050565b5f60208284031215610bf4575f5ffd5b505191905056fea26469706673582212206a848b480fbde41043e99601034ac8862ac73463111c825075db08c06c08588d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_stETHAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_wstETHAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ETH_CHAIN_ID";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ST_ETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IStETH";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WST_ETH_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "unwrapWstETHToStETH";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "unwrappedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wrapStETHToWstETH";
        readonly inputs: readonly [{
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "wrappedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ContractNotYetReadyForMainnet";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAmount";
        readonly inputs: readonly [];
    }];
    static createInterface(): LidoWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LidoWrapper;
}
export {};
