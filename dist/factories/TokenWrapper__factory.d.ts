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
    static readonly bytecode = "0x610100604052348015610010575f5ffd5b506040516110cd3803806110cd83398101604081905261002f9161031f565b5f80546001600160a01b0319166001600160a01b0383811691909117909155831661006d576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038116610094576040516306b7c75960e31b815260040160405180910390fd5b6017833b116100b6576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03808416608052821615801560c052610182576017823b116100f2576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03821660a05261010b83835f196101a4565b5f836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610148573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061016c919061035f565b905061017981600a61047f565b60e0525061019c565b6001600160a01b03831660a052670de0b6b3a764000060e0525b5050506104a4565b6101b18383835f196101b6565b505050565b6001600160a01b03841615610277576001600160a01b0383166101ec576040516363ba9bff60e01b815260040160405180910390fd5b604051636eb1769f60e11b81523060048201526001600160a01b03848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610239573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061025d919061048d565b1015610277576102776001600160a01b038516848361027d565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166102fb575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166102fb57633e3f8f735f526004601cfd5b5f603452505050565b80516001600160a01b038116811461031a575f5ffd5b919050565b5f5f5f60608486031215610331575f5ffd5b61033a84610304565b925061034860208501610304565b915061035660408501610304565b90509250925092565b5f6020828403121561036f575f5ffd5b815160ff8116811461037f575f5ffd5b9392505050565b634e487b7160e01b5f52601160045260245ffd5b6001815b60018411156103d5578085048111156103b9576103b9610386565b60018416156103c757908102905b60019390931c92800261039e565b935093915050565b5f826103eb57506001610479565b816103f757505f610479565b816001811461040d576002811461041757610433565b6001915050610479565b60ff84111561042857610428610386565b50506001821b610479565b5060208310610133831016604e8410600b8410161715610456575081810a610479565b6104625f19848461039a565b805f190482111561047557610475610386565b0290505b92915050565b5f61037f60ff8416836103dd565b5f6020828403121561049d575f5ffd5b5051919050565b60805160a05160c05160e051610bc56105085f395f8181610613015261080001525f81816105ed01526107ce01525f81816101e40152818161057e015261075001525f818161017d015281816104a301528181610528015261083e0152610bc55ff3fe6080604052600436106100b0575f3560e01c8063b7c71db411610066578063e30c39781161004c578063e30c3978146101a7578063f07da06b146101d3578063f2fde38b14610206575f5ffd5b8063b7c71db41461016c578063d0e30db01461019f575f5ffd5b80633ccfd60b116100965780633ccfd60b146100f05780637200b829146101045780638da5cb5b14610118575f5ffd5b806301e33667146100bb57806323452b9c146100dc575f5ffd5b366100b757005b5f5ffd5b3480156100c6575f5ffd5b506100da6100d5366004610a9e565b610225565b005b3480156100e7575f5ffd5b506100da6103aa565b3480156100fb575f5ffd5b506100da610473565b34801561010f575f5ffd5b506100da610666565b348015610123575f5ffd5b505f546101439073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610177575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b6100da61074a565b3480156101b2575f5ffd5b506001546101439073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101de575f5ffd5b506101437f000000000000000000000000000000000000000000000000000000000000000081565b348015610211575f5ffd5b506100da610220366004610adc565b610864565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610275576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661032c575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102e6576040519150601f19603f3d011682016040523d82523d5f602084013e6102eb565b606091505b5050905080610326576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061034d565b61034d73ffffffffffffffffffffffffffffffffffffffff841683836109c0565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103fa576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610449576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156104fd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105219190610afe565b905061054f7f0000000000000000000000000000000000000000000000000000000000000000333084610a09565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d906024015f604051808303815f87803b1580156105d4575f5ffd5b505af11580156105e6573d5f5f3e3d5ffd5b505050505f7f000000000000000000000000000000000000000000000000000000000000000015610655577f0000000000000000000000000000000000000000000000000000000000000000610644670de0b6b3a764000084610b15565b61064e9190610b57565b9050610658565b50805b6106623382610a61565b5050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f3490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004015f604051808303818588803b1580156107b4575f5ffd5b505af11580156107c6573d5f5f3e3d5ffd5b50505050505f7f00000000000000000000000000000000000000000000000000000000000000001561083657670de0b6b3a76400006108257f000000000000000000000000000000000000000000000000000000000000000084610b15565b61082f9190610b57565b9050610839565b50805b6106627f000000000000000000000000000000000000000000000000000000000000000033836109c0565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108b4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610901576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610950576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610a00576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a5457637939f4245f526004601cfd5b5f60605260405250505050565b5f385f3884865af16106625763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610a9b575f5ffd5b50565b5f5f5f60608486031215610ab0575f5ffd5b8335610abb81610a7a565b92506020840135610acb81610a7a565b929592945050506040919091013590565b5f60208284031215610aec575f5ffd5b8135610af781610a7a565b9392505050565b5f60208284031215610b0e575f5ffd5b5051919050565b8082028115828204841417610b51577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f82610b8a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b50049056fea26469706673582212209c35ae55ebfba49034af2c51655206587690ce3feee458a5e81265797921edca64736f6c634300081d0033";
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
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailure";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokenWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenWrapper;
}
export {};
