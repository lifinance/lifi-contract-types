import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TokenWrapper, TokenWrapperInterface } from "../../TokenWrapper.sol/TokenWrapper";
type TokenWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TokenWrapper__factory extends ContractFactory {
    constructor(...args: TokenWrapperConstructorParams);
    deploy(_wrappedToken: PromiseOrValue<string>, _converter: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TokenWrapper>;
    getDeployTransaction(_wrappedToken: PromiseOrValue<string>, _converter: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TokenWrapper;
    connect(signer: Signer): TokenWrapper__factory;
    static readonly bytecode = "0x610100604052348015610010575f5ffd5b5060405161134438038061134483398101604081905261002f91610109565b5f80546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a0819052151560e081905261006c578261006e565b815b6001600160a01b0390811660c05260805160405163095ea7b360e01b81523060048201525f19602482015291169063095ea7b3906044016020604051808303815f875af11580156100c1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100e59190610149565b5050505061016f565b80516001600160a01b0381168114610104575f5ffd5b919050565b5f5f5f6060848603121561011b575f5ffd5b610124846100ee565b9250610132602085016100ee565b9150610140604085016100ee565b90509250925092565b5f60208284031215610159575f5ffd5b81518015158114610168575f5ffd5b9392505050565b60805160a05160c05160e05161114e6101f65f395f81816105e1015261089c01525f81816106810152818161073d015281816109720152610b6101525f81816101b0015261062b01525f818161017d015281816104a30152818161055f0152818161060a015281816108f001528181610a1b01528181610ae00152610c0d015261114e5ff3fe6080604052600436106100b0575f3560e01c8063996c6cc311610066578063d0e30db01161004c578063d0e30db0146101d2578063e30c3978146101da578063f2fde38b14610206575f5ffd5b8063996c6cc31461016c578063bd38837b1461019f575f5ffd5b80633ccfd60b116100965780633ccfd60b146100f05780637200b829146101045780638da5cb5b14610118575f5ffd5b806301e33667146100bb57806323452b9c146100dc575f5ffd5b366100b757005b5f5ffd5b3480156100c6575f5ffd5b506100da6100d5366004611044565b610225565b005b3480156100e7575f5ffd5b506100da6103aa565b3480156100fb575f5ffd5b506100da610473565b34801561010f575f5ffd5b506100da6107b6565b348015610123575f5ffd5b505f546101439073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610177575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b3480156101aa575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b6100da61089a565b3480156101e5575f5ffd5b506001546101439073ffffffffffffffffffffffffffffffffffffffff1681565b348015610211575f5ffd5b506100da610220366004611082565b610c90565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610275576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661032c575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102e6576040519150601f19603f3d011682016040523d82523d5f602084013e6102eb565b606091505b5050905080610326576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034d565b61034d73ffffffffffffffffffffffffffffffffffffffff84168383610dec565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103fa576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610449576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156104fd573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052191906110a4565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af11580156105ba573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105de91906110bb565b507f00000000000000000000000000000000000000000000000000000000000000001561070e576106507f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083610e35565b6040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810182905247907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b1580156106d7575f5ffd5b505af11580156106e9573d5f5f3e3d5ffd5b504792505f91506106fc905083836110da565b90506107083382610e66565b50505050565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b158015610793575f5ffd5b505af11580156107a5573d5f5f3e3d5ffd5b505050506107b33382610e66565b50565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610808576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000015610b5f576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561094a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061096e91906110a4565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b1580156109d6575f5ffd5b505af11580156109e8573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f93507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1692506370a082319150602401602060405180830381865afa158015610a77573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a9b91906110a4565b90505f610aa883836110da565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303815f875af1158015610b3b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061070891906110bb565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015610bc5575f5ffd5b505af1158015610bd7573d5f5f3e3d5ffd5b50506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201523460248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16935063a9059cbb925060440190506020604051808303815f875af1158015610c6c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107b391906110bb565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610ce0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d2d576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610d7c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e2c576390b8ec185f526004601cfd5b5f603452505050565b610e618383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e83565b505050565b5f385f3884865af1610e7f5763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff8416156107085773ffffffffffffffffffffffffffffffffffffffff8316610eec576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f5f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f8391906110a4565b10156107085761070873ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e2c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610e2c57633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff811681146107b3575f5ffd5b5f5f5f60608486031215611056575f5ffd5b833561106181611023565b9250602084013561107181611023565b929592945050506040919091013590565b5f60208284031215611092575f5ffd5b813561109d81611023565b9392505050565b5f602082840312156110b4575f5ffd5b5051919050565b5f602082840312156110cb575f5ffd5b8151801515811461109d575f5ffd5b81810381811115611112577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea2646970667358221220b9acf84288bd707c58e32e84e30a99b1eae1128e4c31f8e08b07e8342eb02dab64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_wrappedToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_converter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
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
        readonly name: "converter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "withdraw";
        readonly inputs: readonly [];
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
        readonly name: "wrappedToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "ExternalCallFailed";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailure";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
