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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506040516110bc3803806110bc833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b61101b806100a15f395ff3fe608060405260043610610093575f3560e01c80637200b8291161006657806399d198431161004c57806399d1984314610166578063e30c397814610185578063f2fde38b146101b1575f5ffd5b80637200b829146100fe5780638da5cb5b14610112575f5ffd5b806301e33667146100975780630e8ae67f146100b857806323452b9c146100cb578063332d746b146100df575b5f5ffd5b3480156100a2575f5ffd5b506100b66100b1366004610cda565b6101d0565b005b6100b66100c6366004610d60565b610355565b3480156100d6575f5ffd5b506100b661045c565b3480156100ea575f5ffd5b506100b66100f9366004610d9f565b610525565b348015610109575f5ffd5b506100b66105c8565b34801561011d575f5ffd5b505f5461013d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610171575f5ffd5b506100b6610180366004610d9f565b6106ac565b348015610190575f5ffd5b5060015461013d9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101bc575f5ffd5b506100b66101cb366004610df0565b61096d565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610220576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102d7575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610291576040519150601f19603f3d011682016040523d82523d5f602084013e610296565b606091505b50509050806102d1576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102f8565b6102f873ffffffffffffffffffffffffffffffffffffffff84168383610ac9565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f365f5b838110156103a75784848281811061037357610373610e12565b604002919091016020810180359586019591945090915061039e906103989085610df0565b82610b12565b50600101610359565b50348211156103f0576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390523460248201526044015b60405180910390fd5b34828103908314610405576104053382610b12565b5f73ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df26868660405161044d929190610e3f565b60405180910390a25050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104ac576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104fb576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b365f5b828110156105715783838281811061054257610542610e12565b6040029190910192506105699050853361055f6020860186610df0565b8560200135610b83565b600101610528565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2684846040516105ba929190610e3f565b60405180910390a250505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461061a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610716573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061073a9190610ea2565b9050815f8167ffffffffffffffff81111561075757610757610eb9565b60405190808252806020026020018201604052801561079b57816020015b604080518082019091525f80825260208201528152602001906001900390816107755790505b5090505f365f5b84811015610914578787828181106107bc576107bc610e12565b6040029190910192505f90506107d56020840184610df0565b73ffffffffffffffffffffffffffffffffffffffff1603610822576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108336040840160208501610ee6565b61ffff1693840193905061271084111561087c576040517fd72bd392000000000000000000000000000000000000000000000000000000008152600481018590526024016103e7565b5f61271061088a838a610f07565b6108949190610f49565b60408051808201909152909150806108af6020870187610df0565b73ffffffffffffffffffffffffffffffffffffffff168152602001828152508684815181106108e0576108e0610e12565b6020026020010181905250805f1461090a5761090a8b336109046020880188610df0565b84610b83565b50506001016107a2565b508773ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df268460405161095b9190610f81565b60405180910390a25050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146109bd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610a0a576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610a59576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610b09576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b5f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7f73ffffffffffffffffffffffffffffffffffffffff831682610c45565b5050565b73ffffffffffffffffffffffffffffffffffffffff8416610bd0576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c1d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3f73ffffffffffffffffffffffffffffffffffffffff8516848484610c5e565b50505050565b5f385f3884865af1610b7f5763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ca957637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610cd7575f5ffd5b50565b5f5f5f60608486031215610cec575f5ffd5b8335610cf781610cb6565b92506020840135610d0781610cb6565b929592945050506040919091013590565b5f5f83601f840112610d28575f5ffd5b50813567ffffffffffffffff811115610d3f575f5ffd5b6020830191508360208260061b8501011115610d59575f5ffd5b9250929050565b5f5f60208385031215610d71575f5ffd5b823567ffffffffffffffff811115610d87575f5ffd5b610d9385828601610d18565b90969095509350505050565b5f5f5f60408486031215610db1575f5ffd5b8335610dbc81610cb6565b9250602084013567ffffffffffffffff811115610dd7575f5ffd5b610de386828701610d18565b9497909650939450505050565b5f60208284031215610e00575f5ffd5b8135610e0b81610cb6565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015610e98578235610e6481610cb6565b73ffffffffffffffffffffffffffffffffffffffff1682526020838101359083015260409283019290910190600101610e51565b5095945050505050565b5f60208284031215610eb2575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215610ef6575f5ffd5b813561ffff81168114610e0b575f5ffd5b8082028115828204841417610f43577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b92915050565b5f82610f7c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b602080825282518282018190525f918401906040840190835b81811015610fda578351805173ffffffffffffffffffffffffffffffffffffffff1684526020908101518185015290930192604090920191600101610f9a565b50909594505050505056fea26469706673582212208c1abd6c7d26b7f5aa15af59431c1ec7f860881a802fd1d8c2128086222405aa64736f6c634300081d0033";
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
