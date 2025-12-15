import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenWrapper, TokenWrapperInterface } from "../TokenWrapper";
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
    static readonly bytecode = "0x610100604052348015610010575f5ffd5b5060405161114b38038061114b83398101604081905261002f9161009e565b5f80546001600160a01b0319166001600160a01b0383811691909117909155838116608052821660a0819052151560e081905261006c578261006e565b815b6001600160a01b031660c052506100de915050565b80516001600160a01b0381168114610099575f5ffd5b919050565b5f5f5f606084860312156100b0575f5ffd5b6100b984610083565b92506100c760208501610083565b91506100d560408501610083565b90509250925092565b60805160a05160c05160e051610fe66101655f395f8181610551015261080c01525f81816105f1015281816106ad015281816108e20152610a4c01525f81816101e4015261059b01525f818161017d015281816104a3015281816105280152818161057a015281816108600152818161098b01528181610a1f0152610acc0152610fe65ff3fe6080604052600436106100b0575f3560e01c8063b7c71db411610066578063e30c39781161004c578063e30c3978146101a7578063f07da06b146101d3578063f2fde38b14610206575f5ffd5b8063b7c71db41461016c578063d0e30db01461019f575f5ffd5b80633ccfd60b116100965780633ccfd60b146100f05780637200b829146101045780638da5cb5b14610118575f5ffd5b806301e33667146100bb57806323452b9c146100dc575f5ffd5b366100b757005b5f5ffd5b3480156100c6575f5ffd5b506100da6100d5366004610efb565b610225565b005b3480156100e7575f5ffd5b506100da6103aa565b3480156100fb575f5ffd5b506100da610473565b34801561010f575f5ffd5b506100da610726565b348015610123575f5ffd5b505f546101439073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610177575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b6100da61080a565b3480156101b2575f5ffd5b506001546101439073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101de575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b348015610211575f5ffd5b506100da610220366004610f39565b610af4565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610275576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661032c575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102e6576040519150601f19603f3d011682016040523d82523d5f602084013e6102eb565b606091505b5050905080610326576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034d565b61034d73ffffffffffffffffffffffffffffffffffffffff84168383610c50565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103fa576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610449576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156104fd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105219190610f5b565b905061054f7f0000000000000000000000000000000000000000000000000000000000000000333084610c99565b7f00000000000000000000000000000000000000000000000000000000000000001561067e576105c07f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083610cf1565b6040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810182905247907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b158015610647575f5ffd5b505af1158015610659573d5f5f3e3d5ffd5b504792505f915061066c90508383610f72565b90506106783382610d1d565b50505050565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b158015610703575f5ffd5b505af1158015610715573d5f5f3e3d5ffd5b505050506107233382610d1d565b50565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610778576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000015610a4a576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156108ba573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108de9190610f5b565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015610946575f5ffd5b505af1158015610958573d5f5f3e3d5ffd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f93507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1692506370a082319150602401602060405180830381865afa1580156109e7573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a0b9190610f5b565b90505f610a188383610f72565b9050610a457f00000000000000000000000000000000000000000000000000000000000000003383610c50565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004015f604051808303818588803b158015610ab0575f5ffd5b505af1158015610ac2573d5f5f3e3d5ffd5b5050505050610af27f00000000000000000000000000000000000000000000000000000000000000003334610c50565b565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b44576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610b91576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610be0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c90576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ce457637939f4245f526004601cfd5b5f60605260405250505050565b610a458383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610d3a565b5f385f3884865af1610d365763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff8416156106785773ffffffffffffffffffffffffffffffffffffffff8316610da3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610e16573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e3a9190610f5b565b10156106785761067873ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c90575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c9057633e3f8f735f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610723575f5ffd5b5f5f5f60608486031215610f0d575f5ffd5b8335610f1881610eda565b92506020840135610f2881610eda565b929592945050506040919091013590565b5f60208284031215610f49575f5ffd5b8135610f5481610eda565b9392505050565b5f60208284031215610f6b575f5ffd5b5051919050565b81810381811115610faa577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9291505056fea26469706673582212205df6d02d47c3ac2ef5e36249ce894388823ca8ffd58efc5eb919a8b68b3544c364736f6c634300081d0033";
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
        readonly name: "CONVERTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_TOKEN";
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
