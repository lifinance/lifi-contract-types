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
    static readonly bytecode = "0x610100604052348015610010575f5ffd5b506040516110be3803806110be83398101604081905261002f91610320565b5f80546001600160a01b0319166001600160a01b0383811691909117909155831661006d576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038116610094576040516306b7c75960e31b815260040160405180910390fd5b6017833b116100b6576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03808416608052821615801560c081905290610101576017833b116100f5576040516303777f6960e51b815260040160405180910390fd5b61010184845f196101a5565b8061010c578361010e565b825b6001600160a01b031660a0528061012d57670de0b6b3a7640000610198565b836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610169573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061018d9190610360565b61019890600a610480565b60e052506104a592505050565b6101b28383835f196101b7565b505050565b6001600160a01b03841615610278576001600160a01b0383166101ed576040516363ba9bff60e01b815260040160405180910390fd5b604051636eb1769f60e11b81523060048201526001600160a01b03848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561023a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025e919061048e565b1015610278576102786001600160a01b038516848361027e565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166102fc575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166102fc57633e3f8f735f526004601cfd5b5f603452505050565b80516001600160a01b038116811461031b575f5ffd5b919050565b5f5f5f60608486031215610332575f5ffd5b61033b84610305565b925061034960208501610305565b915061035760408501610305565b90509250925092565b5f60208284031215610370575f5ffd5b815160ff81168114610380575f5ffd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b6001815b60018411156103d6578085048111156103ba576103ba610387565b60018416156103c857908102905b60019390931c92800261039f565b935093915050565b5f826103ec5750600161047a565b816103f857505f61047a565b816001811461040e576002811461041857610434565b600191505061047a565b60ff84111561042957610429610387565b50506001821b61047a565b5060208310610133831016604e8410600b8410161715610457575081810a61047a565b6104635f19848461039b565b805f190482111561047657610476610387565b0290505b92915050565b5f61038060ff8416836103de565b5f6020828403121561049e575f5ffd5b5051919050565b60805160a05160c05160e051610bb56105095f395f818161061201526107f601525f81816105ec01526107c401525f81816101e40152818161057e015261074701525f818161017d015281816104a301528181610528015261082d0152610bb55ff3fe6080604052600436106100b0575f3560e01c8063b7c71db411610066578063e30c39781161004c578063e30c3978146101a7578063f07da06b146101d3578063f2fde38b14610206575f5ffd5b8063b7c71db41461016c578063d0e30db01461019f575f5ffd5b80633ccfd60b116100965780633ccfd60b146100f05780637200b829146101045780638da5cb5b14610118575f5ffd5b806301e33667146100bb57806323452b9c146100dc575f5ffd5b366100b757005b5f5ffd5b3480156100c6575f5ffd5b506100da6100d5366004610a8e565b610225565b005b3480156100e7575f5ffd5b506100da6103aa565b3480156100fb575f5ffd5b506100da610473565b34801561010f575f5ffd5b506100da61065d565b348015610123575f5ffd5b505f546101439073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610177575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b6100da610741565b3480156101b2575f5ffd5b506001546101439073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101de575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b348015610211575f5ffd5b506100da610220366004610acc565b610853565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610275576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661032c575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102e6576040519150601f19603f3d011682016040523d82523d5f602084013e6102eb565b606091505b5050905080610326576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034d565b61034d73ffffffffffffffffffffffffffffffffffffffff841683836109af565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103fa576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610449576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156104fd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105219190610aee565b905061054f7f00000000000000000000000000000000000000000000000000000000000000003330846109f8565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b1580156105d4575f5ffd5b505af11580156105e6573d5f5f3e3d5ffd5b505050507f000000000000000000000000000000000000000000000000000000000000000015610650577f0000000000000000000000000000000000000000000000000000000000000000610643670de0b6b3a764000083610b05565b61064d9190610b47565b90505b61065a3382610a50565b50565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106af576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f3490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004015f604051808303818588803b1580156107ab575f5ffd5b505af11580156107bd573d5f5f3e3d5ffd5b50505050507f00000000000000000000000000000000000000000000000000000000000000001561082857670de0b6b3a764000061081b7f000000000000000000000000000000000000000000000000000000000000000083610b05565b6108259190610b47565b90505b61065a7f000000000000000000000000000000000000000000000000000000000000000033836109af565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108a3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108f0576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361093f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166109ef576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a4357637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af1610a695763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff8116811461065a575f5ffd5b5f5f5f60608486031215610aa0575f5ffd5b8335610aab81610a6d565b92506020840135610abb81610a6d565b929592945050506040919091013590565b5f60208284031215610adc575f5ffd5b8135610ae781610a6d565b9392505050565b5f60208284031215610afe575f5ffd5b5051919050565b8082028115828204841417610b41577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f82610b7a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b50049056fea2646970667358221220934bc2e6f16e618f978070345ac3e0b2ae4b8f555ad8f933b0dd9ff9d0b4f41b64736f6c634300081d0033";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
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
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
