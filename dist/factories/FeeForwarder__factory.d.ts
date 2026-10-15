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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506040516110ae3803806110ae833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b61100d806100a15f395ff3fe608060405260043610610093575f3560e01c80637200b8291161006657806399d198431161004c57806399d1984314610166578063e30c397814610185578063f2fde38b146101b1575f5ffd5b80637200b829146100fe5780638da5cb5b14610112575f5ffd5b806301e33667146100975780630e8ae67f146100b857806323452b9c146100cb578063332d746b146100df575b5f5ffd5b3480156100a2575f5ffd5b506100b66100b1366004610ccc565b6101d0565b005b6100b66100c6366004610d52565b610355565b3480156100d6575f5ffd5b506100b661045c565b3480156100ea575f5ffd5b506100b66100f9366004610d91565b610525565b348015610109575f5ffd5b506100b66105c8565b34801561011d575f5ffd5b505f5461013d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610171575f5ffd5b506100b6610180366004610d91565b6106ac565b348015610190575f5ffd5b5060015461013d9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101bc575f5ffd5b506100b66101cb366004610de2565b61095f565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610220576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102d7575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610291576040519150601f19603f3d011682016040523d82523d5f602084013e610296565b606091505b50509050806102d1576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102f8565b6102f873ffffffffffffffffffffffffffffffffffffffff84168383610abb565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f365f5b838110156103a75784848281811061037357610373610e04565b604002919091016020810180359586019591945090915061039e906103989085610de2565b82610b04565b50600101610359565b50348211156103f0576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390523460248201526044015b60405180910390fd5b34828103908314610405576104053382610b04565b5f73ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df26868660405161044d929190610e31565b60405180910390a25050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104ac576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104fb576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b365f5b828110156105715783838281811061054257610542610e04565b6040029190910192506105699050853361055f6020860186610de2565b8560200135610b75565b600101610528565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2684846040516105ba929190610e31565b60405180910390a250505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461061a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b73ffffffffffffffffffffffffffffffffffffffff83166106f9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610763573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107879190610e94565b9050815f8167ffffffffffffffff8111156107a4576107a4610eab565b6040519080825280602002602001820160405280156107e857816020015b604080518082019091525f80825260208201528152602001906001900390816107c25790505b5090505f365f5b848110156109065787878281811061080957610809610e04565b90506040020191505f8260200160208101906108259190610ed8565b61ffff1693840193905061271084111561086e576040517fd72bd392000000000000000000000000000000000000000000000000000000008152600481018590526024016103e7565b5f61271061087c838a610ef9565b6108869190610f3b565b60408051808201909152909150806108a16020870187610de2565b73ffffffffffffffffffffffffffffffffffffffff168152602001828152508684815181106108d2576108d2610e04565b6020026020010181905250805f146108fc576108fc8b336108f66020880188610de2565b84610b75565b50506001016107ef565b508773ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df268460405161094d9190610f73565b60405180910390a25050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146109af576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166109fc576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610a4b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610afb576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b51576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7173ffffffffffffffffffffffffffffffffffffffff831682610c37565b5050565b73ffffffffffffffffffffffffffffffffffffffff8416610bc2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c0f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3173ffffffffffffffffffffffffffffffffffffffff8516848484610c50565b50505050565b5f385f3884865af1610b715763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610c9b57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610cc9575f5ffd5b50565b5f5f5f60608486031215610cde575f5ffd5b8335610ce981610ca8565b92506020840135610cf981610ca8565b929592945050506040919091013590565b5f5f83601f840112610d1a575f5ffd5b50813567ffffffffffffffff811115610d31575f5ffd5b6020830191508360208260061b8501011115610d4b575f5ffd5b9250929050565b5f5f60208385031215610d63575f5ffd5b823567ffffffffffffffff811115610d79575f5ffd5b610d8585828601610d0a565b90969095509350505050565b5f5f5f60408486031215610da3575f5ffd5b8335610dae81610ca8565b9250602084013567ffffffffffffffff811115610dc9575f5ffd5b610dd586828701610d0a565b9497909650939450505050565b5f60208284031215610df2575f5ffd5b8135610dfd81610ca8565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015610e8a578235610e5681610ca8565b73ffffffffffffffffffffffffffffffffffffffff1682526020838101359083015260409283019290910190600101610e43565b5095945050505050565b5f60208284031215610ea4575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215610ee8575f5ffd5b813561ffff81168114610dfd575f5ffd5b8082028115828204841417610f35577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f82610f6e577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b602080825282518282018190525f918401906040840190835b81811015610fcc578351805173ffffffffffffffffffffffffffffffffffffffff1684526020908101518185015290930192604090920191600101610f8c565b50909594505050505056fea264697066735822122027d033d103a988d37517287218ed8d01733e19c29687d52b17a8a2cb1fce501664736f6c634300081d0033";
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
        readonly name: "forwardERC20FeesBps";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_distributions";
            readonly type: "tuple[]";
            readonly internalType: "struct FeeForwarder.FeeBpsDistribution[]";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bps";
                readonly type: "uint16";
                readonly internalType: "uint16";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "InvalidTotalBps";
        readonly inputs: readonly [{
            readonly name: "totalBps";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
