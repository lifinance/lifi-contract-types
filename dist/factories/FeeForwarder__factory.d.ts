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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610d6f380380610d6f833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b610cce806100a15f395ff3fe608060405260043610610079575f3560e01c80637200b8291161004c5780637200b829146100e45780638da5cb5b146100f8578063e30c39781461014c578063f2fde38b14610178575f5ffd5b806301e336671461007d5780630e8ae67f1461009e57806323452b9c146100b1578063332d746b146100c5575b5f5ffd5b348015610088575f5ffd5b5061009c610097366004610ab1565b610197565b005b61009c6100ac366004610b37565b610306565b3480156100bc575f5ffd5b5061009c6103b8565b3480156100d0575f5ffd5b5061009c6100df366004610b76565b610481565b3480156100ef575f5ffd5b5061009c610516565b348015610103575f5ffd5b505f546101239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610157575f5ffd5b506001546101239073ffffffffffffffffffffffffffffffffffffffff1681565b348015610183575f5ffd5b5061009c610192366004610bc7565b6105fa565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661029e575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610258576040519150601f19603f3d011682016040523d82523d5f602084013e61025d565b606091505b5050905080610298576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102a9565b6102a9838383610756565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b365f5b828110156103505783838281811061032357610323610be9565b604002919091019250610348905061033e6020840184610bc7565b83602001356108a6565b600101610309565b504780156103625761036233826108a6565b5f73ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2685856040516103aa929190610c16565b60405180910390a250505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610408576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610457576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b365f5b828110156104cd5783838281811061049e5761049e610be9565b6040029190910192506104c5905085336104bb6020860186610bc7565b8560200135610917565b600101610484565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2684846040516103aa929190610c16565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610568576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461064a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610697576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106e6576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff82166107a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156107df575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610880576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610856573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061087a9190610c79565b50505050565b6108a173ffffffffffffffffffffffffffffffffffffffff841683836109d3565b505050565b73ffffffffffffffffffffffffffffffffffffffff82166108f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091373ffffffffffffffffffffffffffffffffffffffff831682610a1c565b5050565b73ffffffffffffffffffffffffffffffffffffffff8416610964576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087a73ffffffffffffffffffffffffffffffffffffffff8516848484610a35565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610a13576390b8ec185f526004601cfd5b5f603452505050565b5f385f3884865af16109135763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a8057637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610aae575f5ffd5b50565b5f5f5f60608486031215610ac3575f5ffd5b8335610ace81610a8d565b92506020840135610ade81610a8d565b929592945050506040919091013590565b5f5f83601f840112610aff575f5ffd5b50813567ffffffffffffffff811115610b16575f5ffd5b6020830191508360208260061b8501011115610b30575f5ffd5b9250929050565b5f5f60208385031215610b48575f5ffd5b823567ffffffffffffffff811115610b5e575f5ffd5b610b6a85828601610aef565b90969095509350505050565b5f5f5f60408486031215610b88575f5ffd5b8335610b9381610a8d565b9250602084013567ffffffffffffffff811115610bae575f5ffd5b610bba86828701610aef565b9497909650939450505050565b5f60208284031215610bd7575f5ffd5b8135610be281610a8d565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015610c6f578235610c3b81610a8d565b73ffffffffffffffffffffffffffffffffffffffff1682526020838101359083015260409283019290910190600101610c28565b5095945050505050565b5f60208284031215610c89575f5ffd5b81518015158114610be2575f5ffdfea2646970667358221220af4523f8d1e34108d34420c9df4efd03d452d3df570035b16a363a64faad696f64736f6c634300081d0033";
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
