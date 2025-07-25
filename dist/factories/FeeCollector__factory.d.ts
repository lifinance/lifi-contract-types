import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeCollector, FeeCollectorInterface } from "../FeeCollector";
type FeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FeeCollector__factory extends ContractFactory {
    constructor(...args: FeeCollectorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FeeCollector>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FeeCollector;
    connect(signer: Signer): FeeCollector__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506040516112f33803806112f3833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f5ffd5b81516001600160a01b03811681146072575f5ffd5b9392505050565b61126d806100865f395ff3fe6080604052600436106100ce575f3560e01c8063bd0b380b1161007c578063e30c397811610057578063e30c39781461022f578063e5d647661461025b578063eedd56e11461027a578063f2fde38b14610299575f5ffd5b8063bd0b380b146101de578063c489744b146101fd578063e0cbc5f21461021c575f5ffd5b806364bc5be1116100ac57806364bc5be11461015b5780637200b8291461017a5780638da5cb5b1461018e575f5ffd5b80630fe97f70146100d257806323452b9c14610126578063461ad4f51461013c575b5f5ffd5b3480156100dd575f5ffd5b506101136100ec366004610fdb565b73ffffffffffffffffffffffffffffffffffffffff165f9081526003602052604090205490565b6040519081526020015b60405180910390f35b348015610131575f5ffd5b5061013a6102b8565b005b348015610147575f5ffd5b5061013a610156366004610fdb565b610381565b348015610166575f5ffd5b5061013a610175366004611028565b610484565b348015610185575f5ffd5b5061013a610647565b348015610199575f5ffd5b505f546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b3480156101e9575f5ffd5b5061013a6101f8366004610fdb565b61072b565b348015610208575f5ffd5b50610113610217366004611111565b6107ed565b61013a61022a366004611142565b610826565b34801561023a575f5ffd5b506001546101b99073ffffffffffffffffffffffffffffffffffffffff1681565b348015610266575f5ffd5b5061013a610275366004611028565b61096e565b348015610285575f5ffd5b5061013a610294366004611174565b610af2565b3480156102a4575f5ffd5b5061013a6102b3366004610fdb565b610bd9565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610308576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610357576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103d1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f9081526003602052604081205490819003610402575050565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260036020526040812055610432823383610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104d4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80515f805b828110156106415760035f8583815181106104f6576104f66111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205491505f60035f868481518110610550576105506111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055506105b98482815181106105aa576105aa6111b7565b60200260200101513384610d35565b3373ffffffffffffffffffffffffffffffffffffffff168482815181106105e2576105e26111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161063191815260200190565b60405180910390a36001016104d9565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610699576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b335f90815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610767575050565b335f81815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107a390839083610d35565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa890602001610478565b73ffffffffffffffffffffffffffffffffffffffff8083165f908152600260209081526040808320938516835292905220545b92915050565b6108308284611211565b341015610869576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f908152600260209081526040808320838052909152812080548592906108a8908490611211565b90915550505f80805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff80548492906108e7908490611211565b909155505f90506108f88385611211565b6109029034611224565b90508015610914576109143382610d6a565b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416915f917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80515f805b8281101561064157335f90815260026020526040812085519091908690849081106109a0576109a06111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549150815f14610aea57335f90815260026020526040812085518290879085908110610a0f57610a0f6111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550610a698482815181106105aa576105aa6111b7565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610a9257610a926111b7565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610ae191815260200190565b60405180910390a35b600101610973565b610b0584610b008486611211565b610d87565b73ffffffffffffffffffffffffffffffffffffffff8082165f90815260026020908152604080832093881683529290529081208054859290610b48908490611211565b909155505073ffffffffffffffffffffffffffffffffffffffff84165f9081526003602052604081208054849290610b81908490611211565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610960565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c29576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c76576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610cc5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316610d5f57610d5a8282610e37565b505050565b610d5a838383610ea4565b5f385f3884865af1610d835763b12d13eb5f526004601cfd5b5050565b805f03610dc0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e155780341015610d83576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d8373ffffffffffffffffffffffffffffffffffffffff8316333084610f12565b73ffffffffffffffffffffffffffffffffffffffff8216610e84576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d8373ffffffffffffffffffffffffffffffffffffffff831682610d6a565b73ffffffffffffffffffffffffffffffffffffffff8216610ef1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d5a73ffffffffffffffffffffffffffffffffffffffff84168383610f6a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f5d57637939f4245f526004601cfd5b5f60605260405250505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610faa576390b8ec185f526004601cfd5b5f603452505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610fd6575f5ffd5b919050565b5f60208284031215610feb575f5ffd5b610ff482610fb3565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f60208284031215611038575f5ffd5b813567ffffffffffffffff81111561104e575f5ffd5b8201601f8101841361105e575f5ffd5b803567ffffffffffffffff81111561107857611078610ffb565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811067ffffffffffffffff821117156110c3576110c3610ffb565b6040529182526020818401810192908101878411156110e0575f5ffd5b6020850194505b83851015611106576110f885610fb3565b8152602094850194016110e7565b509695505050505050565b5f5f60408385031215611122575f5ffd5b61112b83610fb3565b915061113960208401610fb3565b90509250929050565b5f5f5f60608486031215611154575f5ffd5b833592506020840135915061116b60408501610fb3565b90509250925092565b5f5f5f5f60808587031215611187575f5ffd5b61119085610fb3565b935060208501359250604085013591506111ac60608601610fb3565b905092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610820576108206111e4565b81810381811115610820576108206111e456fea2646970667358221220b87ccecf16f6965a55d455b9907be1eea2858077bc0864a3e3985796eaa1856264736f6c634300081d0033";
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
        readonly name: "batchWithdrawIntegratorFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "batchWithdrawLifiFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "collectNativeFees";
        readonly inputs: readonly [{
            readonly name: "integratorFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lifiFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "collectTokenFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "integratorFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lifiFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
        readonly name: "getLifiTokenBalance";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTokenBalance";
        readonly inputs: readonly [{
            readonly name: "integratorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "withdrawIntegratorFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawLifiFees";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "FeesCollected";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_integrator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_integratorFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_lifiFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeesWithdrawn";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiFeesWithdrawn";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly type: "error";
        readonly name: "InvalidAmount";
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
        readonly name: "NotEnoughNativeForFees";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransferFailure";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): FeeCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FeeCollector;
}
export {};
