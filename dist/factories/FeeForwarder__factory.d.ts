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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610d83380380610d83833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b610ce2806100a15f395ff3fe608060405260043610610079575f3560e01c80637200b8291161004c5780637200b829146100e45780638da5cb5b146100f8578063e30c39781461014c578063f2fde38b14610178575f5ffd5b806301e336671461007d5780630e8ae67f1461009e57806323452b9c146100b1578063332d746b146100c5575b5f5ffd5b348015610088575f5ffd5b5061009c610097366004610ac5565b610197565b005b61009c6100ac366004610b4b565b610288565b3480156100bc575f5ffd5b5061009c61038e565b3480156100d0575f5ffd5b5061009c6100df366004610b8a565b610457565b3480156100ef575f5ffd5b5061009c6104fa565b348015610103575f5ffd5b505f546101239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610157575f5ffd5b506001546101239073ffffffffffffffffffffffffffffffffffffffff1681565b348015610183575f5ffd5b5061009c610192366004610bdb565b6105de565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f03610220576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022b83838361073a565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f365f5b838110156102da578484828181106102a6576102a6610bfd565b60400291909101602081018035958601959194509091506102d1906102cb9085610bdb565b8261076f565b5060010161028c565b5034821115610322576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905234602482015260440160405180910390fd5b3482810390831461033757610337338261076f565b5f73ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df26868660405161037f929190610c2a565b60405180910390a25050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103de576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661042d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b365f5b828110156104a35783838281811061047457610474610bfd565b60400291909101925061049b905085336104916020860186610bdb565b85602001356107e0565b60010161045a565b508373ffffffffffffffffffffffffffffffffffffffff167f3a7029951ba36c1af37954df919ce2f9a95c3f5c2c2e872d5e7fd47c61a6df2684846040516104ec929190610c2a565b60405180910390a250505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461054c576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461062e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661067b576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106ca576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff83166107645761075f828261076f565b505050565b61075f8383836108a2565b73ffffffffffffffffffffffffffffffffffffffff82166107bc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107dc73ffffffffffffffffffffffffffffffffffffffff8316826109e7565b5050565b73ffffffffffffffffffffffffffffffffffffffff841661082d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661087a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089c73ffffffffffffffffffffffffffffffffffffffff8516848484610a00565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166108ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc4614801561092b575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156109c6576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af11580156109a2573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061089c9190610c8d565b61075f73ffffffffffffffffffffffffffffffffffffffff84168383610a58565b5f385f3884865af16107dc5763b12d13eb5f526004601cfd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a4b57637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610a98576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610ac2575f5ffd5b50565b5f5f5f60608486031215610ad7575f5ffd5b8335610ae281610aa1565b92506020840135610af281610aa1565b929592945050506040919091013590565b5f5f83601f840112610b13575f5ffd5b50813567ffffffffffffffff811115610b2a575f5ffd5b6020830191508360208260061b8501011115610b44575f5ffd5b9250929050565b5f5f60208385031215610b5c575f5ffd5b823567ffffffffffffffff811115610b72575f5ffd5b610b7e85828601610b03565b90969095509350505050565b5f5f5f60408486031215610b9c575f5ffd5b8335610ba781610aa1565b9250602084013567ffffffffffffffff811115610bc2575f5ffd5b610bce86828701610b03565b9497909650939450505050565b5f60208284031215610beb575f5ffd5b8135610bf681610aa1565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b602080825281018290525f8360408301825b85811015610c83578235610c4f81610aa1565b73ffffffffffffffffffffffffffffffffffffffff1682526020838101359083015260409283019290910190600101610c3c565b5095945050505050565b5f60208284031215610c9d575f5ffd5b81518015158114610bf6575f5ffdfea2646970667358221220cfa77b623cd50ec57c3b9b6ad045ce38e4e7d1ca0eb48f543aa6f0a0784865c164736f6c634300081d0033";
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
