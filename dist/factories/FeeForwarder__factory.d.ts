import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeForwarder, FeeForwarderInterface } from "../FeeForwarder";
type FeeForwarderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FeeForwarder__factory extends ContractFactory {
    constructor(...args: FeeForwarderConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FeeForwarder>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FeeForwarder;
    connect(signer: Signer): FeeForwarder__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051610cd5380380610cd583398101604081905261002f91610070565b600080546001600160a01b0319166001600160a01b03831690811790915561006a576040516306b7c75960e31b815260040160405180910390fd5b506100a0565b60006020828403121561008257600080fd5b81516001600160a01b038116811461009957600080fd5b9392505050565b610c26806100af6000396000f3fe60806040526004361061007b5760003560e01c80637200b8291161004e5780637200b829146100ea5780638da5cb5b146100ff578063e30c397814610155578063f2fde38b1461018257600080fd5b806301e33667146100805780630e8ae67f146100a257806323452b9c146100b5578063332d746b146100ca575b600080fd5b34801561008c57600080fd5b506100a061009b3660046109b4565b6101a2565b005b6100a06100b0366004610a41565b61032c565b3480156100c157600080fd5b506100a06103e8565b3480156100d657600080fd5b506100a06100e5366004610a83565b6104b2565b3480156100f657600080fd5b506100a0610550565b34801561010b57600080fd5b5060005461012c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016157600080fd5b5060015461012c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561018e57600080fd5b506100a061019d366004610ad8565b610636565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101f3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102ae5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610268576040519150601f19603f3d011682016040523d82523d6000602084013e61026d565b606091505b50509050806102a8576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102cf565b6102cf73ffffffffffffffffffffffffffffffffffffffff84168383610794565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b3660005b8281101561037f5783838281811061034a5761034a610afc565b60400291909101925061036f90506103656020840184610ad8565b83602001356107e3565b61037881610b2b565b9050610330565b504780156103915761039133826107e3565b600073ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2685856040516103da929190610b8a565b60405180910390a250505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610439576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610488576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3660005b82811015610507578383828181106104d0576104d0610afc565b6040029190910192506104f7905085336104ed6020860186610ad8565b8560200135610854565b61050081610b2b565b90506104b6565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2684846040516103da929190610b8a565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105a2576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610687576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106d4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610723576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166107d9576390b8ec186000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610830576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085073ffffffffffffffffffffffffffffffffffffffff831682610916565b5050565b73ffffffffffffffffffffffffffffffffffffffff84166108a1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108ee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091073ffffffffffffffffffffffffffffffffffffffff8516848484610932565b50505050565b60003860003884865af16108505763b12d13eb6000526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661098157637939f4246000526004601cfd5b600060605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff811681146109b157600080fd5b50565b6000806000606084860312156109c957600080fd5b83356109d48161098f565b925060208401356109e48161098f565b929592945050506040919091013590565b60008083601f840112610a0757600080fd5b50813567ffffffffffffffff811115610a1f57600080fd5b6020830191508360208260061b8501011115610a3a57600080fd5b9250929050565b60008060208385031215610a5457600080fd5b823567ffffffffffffffff811115610a6b57600080fd5b610a77858286016109f5565b90969095509350505050565b600080600060408486031215610a9857600080fd5b8335610aa38161098f565b9250602084013567ffffffffffffffff811115610abf57600080fd5b610acb868287016109f5565b9497909650939450505050565b600060208284031215610aea57600080fd5b8135610af58161098f565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b83577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6020808252818101839052600090604080840186845b87811015610be3578135610bb38161098f565b73ffffffffffffffffffffffffffffffffffffffff16835281850135858401529183019190830190600101610ba0565b509097965050505050505056fea2646970667358221220c0cd287b2b4db46717a4a935aca139bec143d413d8f60574f4c9166b83b82b4764736f6c63430008110033";
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
        readonly name: "forwardERC20Fees";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_distributions";
            readonly type: "tuple[]";
            readonly internalType: "struct FeeForwarder.FeeDistribution[]";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "forwardNativeFees";
        readonly inputs: readonly [{
            readonly name: "_distributions";
            readonly type: "tuple[]";
            readonly internalType: "struct FeeForwarder.FeeDistribution[]";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
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
        readonly name: "FeesForwarded";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "distributions";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct FeeForwarder.FeeDistribution[]";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
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
    }];
    static createInterface(): FeeForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeForwarder;
}
export {};
