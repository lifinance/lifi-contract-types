import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20Proxy, ERC20ProxyInterface } from "../ERC20Proxy";
type ERC20ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610a7e380380610a7e833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b6109f8806100865f395ff3fe608060405234801561000f575f5ffd5b506004361061009f575f3560e01c8063536fff6c116100725780638da5cb5b116100585780638da5cb5b14610125578063e30c397814610169578063f2fde38b14610189575f5ffd5b8063536fff6c146100e65780637200b8291461011d575f5ffd5b806301e33667146100a357806315dacbea146100b857806323452b9c146100cb578063454bbd29146100d3575b5f5ffd5b6100b66100b13660046108d9565b61019c565b005b6100b66100c6366004610917565b610321565b6100b661037b565b6100b66100e1366004610965565b610444565b6101086100f43660046109a0565b60026020525f908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100b661051d565b5f546101449073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610114565b6001546101449073ffffffffffffffffffffffffffffffffffffffff1681565b6100b66101973660046109a0565b610601565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102a3575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461025d576040519150601f19603f3d011682016040523d82523d5f602084013e610262565b606091505b505090508061029d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102c4565b6102c473ffffffffffffffffffffffffffffffffffffffff8416838361075d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b335f9081526002602052604090205460ff16610369576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610375848484846107a6565b50505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661041a576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610494576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527f5fe3a0cb9aeae856eac34445ace9544f3e15c21fa6f9bffeca60d662a690ca1b910160405180910390a25050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461056f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610651576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661069e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106ed576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661079d576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff84166107f3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610840576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037573ffffffffffffffffffffffffffffffffffffffff851684848460405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166108a857637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff811681146108d6575f5ffd5b50565b5f5f5f606084860312156108eb575f5ffd5b83356108f6816108b5565b92506020840135610906816108b5565b929592945050506040919091013590565b5f5f5f5f6080858703121561092a575f5ffd5b8435610935816108b5565b93506020850135610945816108b5565b92506040850135610955816108b5565b9396929550929360600135925050565b5f5f60408385031215610976575f5ffd5b8235610981816108b5565b915060208301358015158114610995575f5ffd5b809150509250929050565b5f602082840312156109b0575f5ffd5b81356109bb816108b5565b939250505056fea2646970667358221220c946884383bf64e1a4404bb3b5b33995c869a54d4f25aac0ec842b68c37fbba164736f6c634300081d0033";
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
    }];
    static createInterface(): ERC20ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Proxy;
}
export {};
