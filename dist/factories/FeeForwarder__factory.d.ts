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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610d21380380610d21833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b610c80806100a15f395ff3fe608060405260043610610079575f3560e01c80637200b8291161004c5780637200b829146100e45780638da5cb5b146100f8578063e30c39781461014c578063f2fde38b14610178575f5ffd5b806301e336671461007d5780630e8ae67f1461009e57806323452b9c146100b1578063332d746b146100c5575b5f5ffd5b348015610088575f5ffd5b5061009c610097366004610a63565b610197565b005b61009c6100ac366004610ae9565b610288565b3480156100bc575f5ffd5b5061009c61033a565b3480156100d0575f5ffd5b5061009c6100df366004610b28565b610403565b3480156100ef575f5ffd5b5061009c610498565b348015610103575f5ffd5b505f546101239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610157575f5ffd5b506001546101239073ffffffffffffffffffffffffffffffffffffffff1681565b348015610183575f5ffd5b5061009c610192366004610b79565b61057c565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f03610220576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022b8383836106d8565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b365f5b828110156102d2578383828181106102a5576102a5610b9b565b6040029190910192506102ca90506102c06020840184610b79565b836020013561070d565b60010161028b565b504780156102e4576102e4338261070d565b5f73ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df26858560405161032c929190610bc8565b60405180910390a250505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461038a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103d9576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b365f5b8281101561044f5783838281811061042057610420610b9b565b6040029190910192506104479050853361043d6020860186610b79565b856020013561077e565b600101610406565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df26848460405161032c929190610bc8565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104ea576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146105cc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610619576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610668576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316610702576106fd828261070d565b505050565b6106fd838383610840565b73ffffffffffffffffffffffffffffffffffffffff821661075a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61077a73ffffffffffffffffffffffffffffffffffffffff831682610985565b5050565b73ffffffffffffffffffffffffffffffffffffffff84166107cb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610818576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083a73ffffffffffffffffffffffffffffffffffffffff851684848461099e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661088d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156108c9575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610964576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610940573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061083a9190610c2b565b6106fd73ffffffffffffffffffffffffffffffffffffffff841683836109f6565b5f385f3884865af161077a5763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166109e957637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610a36576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a60575f5ffd5b50565b5f5f5f60608486031215610a75575f5ffd5b8335610a8081610a3f565b92506020840135610a9081610a3f565b929592945050506040919091013590565b5f5f83601f840112610ab1575f5ffd5b50813567ffffffffffffffff811115610ac8575f5ffd5b6020830191508360208260061b8501011115610ae2575f5ffd5b9250929050565b5f5f60208385031215610afa575f5ffd5b823567ffffffffffffffff811115610b10575f5ffd5b610b1c85828601610aa1565b90969095509350505050565b5f5f5f60408486031215610b3a575f5ffd5b8335610b4581610a3f565b9250602084013567ffffffffffffffff811115610b60575f5ffd5b610b6c86828701610aa1565b9497909650939450505050565b5f60208284031215610b89575f5ffd5b8135610b9481610a3f565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015610c21578235610bed81610a3f565b73ffffffffffffffffffffffffffffffffffffffff1682526020838101359083015260409283019290910190600101610bda565b5095945050505050565b5f60208284031215610c3b575f5ffd5b81518015158114610b94575f5ffdfea2646970667358221220a27ab3f8e71e68e018d7ea18fac0296c9938213f8e72bfc44cd406b65296858164736f6c634300081d0033";
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
    }, {
        readonly type: "error";
        readonly name: "ZeroAmount";
        readonly inputs: readonly [];
    }];
    static createInterface(): FeeForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeForwarder;
}
export {};
