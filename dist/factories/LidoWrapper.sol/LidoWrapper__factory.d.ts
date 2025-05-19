import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { LidoWrapper, LidoWrapperInterface } from "../../LidoWrapper.sol/LidoWrapper";
declare type LidoWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161102838038061102883398101604081905261002e91610160565b5f80546001600160a01b0319166001600160a01b03838116919091179091558316158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03808416608052821660a0525f1946016100c657604051638bb9ffc760e01b815260040160405180910390fd5b60a05160805160405163095ea7b360e01b81526001600160a01b0391821660048201525f19602482015291169063095ea7b3906044016020604051808303815f875af1158015610118573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061013c91906101a0565b505050506101c6565b80516001600160a01b038116811461015b575f5ffd5b919050565b5f5f5f60608486031215610172575f5ffd5b61017b84610145565b925061018960208501610145565b915061019760408501610145565b90509250925092565b5f602082840312156101b0575f5ffd5b815180151581146101bf575f5ffd5b9392505050565b60805160a051610e036102255f395f818161019e015281816106770152818161072e01526108d201525f818160fd0152818161047c0152818161052c015281816105dc0152818161098101528181610a1c0152610ad30152610e035ff3fe608060405234801561000f575f5ffd5b50600436106100c4575f3560e01c80638da5cb5b1161007d578063a96bb86a11610058578063a96bb86a14610199578063e30c3978146101c0578063f2fde38b146101e0575f5ffd5b80638da5cb5b146101515780639f5fa02814610170578063a816ca9214610186575f5ffd5b806324dd6483116100ad57806324dd6483146100e5578063338346d2146100f85780637200b82914610149575f5ffd5b806301e33667146100c857806323452b9c146100dd575b5f5ffd5b6100db6100d6366004610d20565b6101f3565b005b6100db610378565b6100db6100f3366004610d5e565b610441565b61011f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100db6107b3565b5f5461011f9073ffffffffffffffffffffffffffffffffffffffff1681565b610178600181565b604051908152602001610140565b6100db610194366004610d5e565b610897565b61011f7f000000000000000000000000000000000000000000000000000000000000000081565b60015461011f9073ffffffffffffffffffffffffffffffffffffffff1681565b6100db6101ee366004610d75565b610b57565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610243576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102fa575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102b4576040519150601f19603f3d011682016040523d82523d5f602084013e6102b9565b606091505b50509050806102f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061031b565b61031b73ffffffffffffffffffffffffffffffffffffffff84168383610cb3565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610417576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af11580156104d7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104fb9190610d97565b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610586573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105aa9190610db6565b6040517fde0e9a3e000000000000000000000000000000000000000000000000000000008152600481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063de0e9a3e906024015f604051808303815f87803b158015610632575f5ffd5b505af1158015610644573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f92507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1691506370a0823190602401602060405180830381865afa1580156106d2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106f69190610db6565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303815f875af1158015610789573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107ad9190610d97565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610805576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af115801561092d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109519190610d97565b506040517fea598cb0000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ea598cb0906024015f604051808303815f87803b1580156109d7575f5ffd5b505af11580156109e9573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f92507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1691506370a0823190602401602060405180830381865afa158015610a77573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a9b9190610db6565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303815f875af1158015610b2e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b529190610d97565b505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610ba7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610bf4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610c43576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610cf3576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d1d575f5ffd5b50565b5f5f5f60608486031215610d32575f5ffd5b8335610d3d81610cfc565b92506020840135610d4d81610cfc565b929592945050506040919091013590565b5f60208284031215610d6e575f5ffd5b5035919050565b5f60208284031215610d85575f5ffd5b8135610d9081610cfc565b9392505050565b5f60208284031215610da7575f5ffd5b81518015158114610d90575f5ffd5b5f60208284031215610dc6575f5ffd5b505191905056fea2646970667358221220e350a6066098f1f8e6b4d1e726b3acdc9bf79425cfda476d9e9b87635f1e8c5c64736f6c634300081d0033";
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
        readonly outputs: readonly [];
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
        readonly outputs: readonly [];
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
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): LidoWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LidoWrapper;
}
export {};
