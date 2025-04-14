import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20Proxy, ERC20ProxyInterface } from "../ERC20Proxy";
declare type ERC20ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Proxy__factory extends ContractFactory {
    constructor(...args: ERC20ProxyConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC20Proxy>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC20Proxy;
    connect(signer: Signer): ERC20Proxy__factory;
    static readonly bytecode = "0x608060405234801561000f575f80fd5b5060405161102138038061102183398101604081905261002e91610052565b5f80546001600160a01b0319166001600160a01b039290921691909117905561007f565b5f60208284031215610062575f80fd5b81516001600160a01b0381168114610078575f80fd5b9392505050565b610f958061008c5f395ff3fe608060405234801561000f575f80fd5b506004361061009f575f3560e01c8063536fff6c116100725780638da5cb5b116100585780638da5cb5b14610125578063e30c397814610169578063f2fde38b14610189575f80fd5b8063536fff6c146100e65780637200b8291461011d575f80fd5b806301e33667146100a357806315dacbea146100b857806323452b9c146100cb578063454bbd29146100d3575b5f80fd5b6100b66100b1366004610d70565b61019c565b005b6100b66100c6366004610dae565b610321565b6100b661037b565b6100b66100e1366004610e09565b610444565b6101086100f4366004610e40565b60026020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100b661051d565b5f546101449073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610114565b6001546101449073ffffffffffffffffffffffffffffffffffffffff1681565b6100b6610197366004610e40565b610601565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102a3575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461025d576040519150601f19603f3d011682016040523d82523d5f602084013e610262565b606091505b505090508061029d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102c4565b6102c473ffffffffffffffffffffffffffffffffffffffff8416838361075d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b335f9081526002602052604090205460ff16610369576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610375848484846107a6565b50505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661041a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610494576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461056f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610651576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661069e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106ed576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661079d576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff84166107f3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610840576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156108ae573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108d29190610e62565b90506108e0828686866109bb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561094e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109729190610e62565b61097c9190610e79565b146109b3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610375928792915f91610a8d918516908490610b43565b905080515f1480610aad575080806020019051810190610aad9190610eb7565b610b3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b505050565b6060610b5184845f85610b59565b949350505050565b606082471015610beb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b35565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051610c139190610ef4565b5f6040518083038185875af1925050503d805f8114610c4d576040519150601f19603f3d011682016040523d82523d5f602084013e610c52565b606091505b5091509150610c6387838387610c6e565b979650505050505050565b60608315610d035782515f03610cfc5773ffffffffffffffffffffffffffffffffffffffff85163b610cfc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b35565b5081610b51565b610b518383815115610d185781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b359190610f0f565b73ffffffffffffffffffffffffffffffffffffffff81168114610d6d575f80fd5b50565b5f805f60608486031215610d82575f80fd5b8335610d8d81610d4c565b92506020840135610d9d81610d4c565b929592945050506040919091013590565b5f805f8060808587031215610dc1575f80fd5b8435610dcc81610d4c565b93506020850135610ddc81610d4c565b92506040850135610dec81610d4c565b9396929550929360600135925050565b8015158114610d6d575f80fd5b5f8060408385031215610e1a575f80fd5b8235610e2581610d4c565b91506020830135610e3581610dfc565b809150509250929050565b5f60208284031215610e50575f80fd5b8135610e5b81610d4c565b9392505050565b5f60208284031215610e72575f80fd5b5051919050565b81810381811115610eb1577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f60208284031215610ec7575f80fd5b8151610e5b81610dfc565b5f5b83811015610eec578181015183820152602001610ed4565b50505f910152565b5f8251610f05818460208701610ed2565b9190910192915050565b602081525f8251806020840152610f2d816040850160208701610ed2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122059c7787ef22c011a2126bc6c238c4f27c17cc1a406f90aa8aa2d3bb91979efed64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "authorizedCallers";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "setAuthorizedCaller";
        readonly inputs: readonly [{
            readonly name: "caller";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "authorized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "AuthorizationChanged";
        readonly inputs: readonly [{
            readonly name: "caller";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "authorized";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
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
        readonly name: "NoTransferToNullAddress";
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
    }];
    static createInterface(): ERC20ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Proxy;
}
export {};
