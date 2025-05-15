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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051610f0e380380610f0e83398101604081905261002e91610160565b5f80546001600160a01b0319166001600160a01b03838116919091179091558316158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03808416608052821660a052466001036100c657604051638bb9ffc760e01b815260040160405180910390fd5b60a05160805160405163095ea7b360e01b81526001600160a01b0391821660048201525f19602482015291169063095ea7b3906044016020604051808303815f875af1158015610118573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061013c91906101a0565b505050506101c6565b80516001600160a01b038116811461015b575f5ffd5b919050565b5f5f5f60608486031215610172575f5ffd5b61017b84610145565b925061018960208501610145565b915061019760408501610145565b90509250925092565b5f602082840312156101b0575f5ffd5b815180151581146101bf575f5ffd5b9392505050565b60805160a051610cf061021e5f395f818161017c015281816105a40152818161065b01526107ff01525f818160f20152818161045a01528181610509015281816108ae015281816109490152610a000152610cf05ff3fe608060405234801561000f575f5ffd5b50600436106100b9575f3560e01c80638da5cb5b11610072578063a96bb86a11610058578063a96bb86a14610177578063e30c39781461019e578063f2fde38b146101be575f5ffd5b80638da5cb5b14610145578063a816ca9214610164575f5ffd5b806324dd6483116100a257806324dd6483146100da578063338346d2146100ed5780637200b8291461013d575f5ffd5b806301e33667146100bd57806323452b9c146100d2575b5f5ffd5b6100d06100cb366004610c0d565b6101d1565b005b6100d0610356565b6100d06100e8366004610c4b565b61041f565b6101147f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100d06106e0565b5f546101149073ffffffffffffffffffffffffffffffffffffffff1681565b6100d0610172366004610c4b565b6107c4565b6101147f000000000000000000000000000000000000000000000000000000000000000081565b6001546101149073ffffffffffffffffffffffffffffffffffffffff1681565b6100d06101cc366004610c62565b610a44565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610221576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102d8575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610292576040519150601f19603f3d011682016040523d82523d5f602084013e610297565b606091505b50509050806102d2576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102f9565b6102f973ffffffffffffffffffffffffffffffffffffffff84168383610ba0565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103a6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103f5576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af11580156104b5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104d99190610c84565b506040517fde0e9a3e000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063de0e9a3e906024015f604051808303815f87803b15801561055f575f5ffd5b505af1158015610571573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f92507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1691506370a0823190602401602060405180830381865afa1580156105ff573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106239190610ca3565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044015b6020604051808303815f875af11580156106b7573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106db9190610c84565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610732576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af115801561085a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061087e9190610c84565b506040517fea598cb0000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ea598cb0906024015f604051808303815f87803b158015610904575f5ffd5b505af1158015610916573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f92507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1691506370a0823190602401602060405180830381865afa1580156109a4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109c89190610ca3565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb9060440161069b565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a94576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ae1576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610b30576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610be0576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c0a575f5ffd5b50565b5f5f5f60608486031215610c1f575f5ffd5b8335610c2a81610be9565b92506020840135610c3a81610be9565b929592945050506040919091013590565b5f60208284031215610c5b575f5ffd5b5035919050565b5f60208284031215610c72575f5ffd5b8135610c7d81610be9565b9392505050565b5f60208284031215610c94575f5ffd5b81518015158114610c7d575f5ffd5b5f60208284031215610cb3575f5ffd5b505191905056fea26469706673582212203faf656b10b9e5e361868ee6608bd7e16fa8e8b22d2bc45b352d82b43748b34464736f6c634300081d0033";
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
