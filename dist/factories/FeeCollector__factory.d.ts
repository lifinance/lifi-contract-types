import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { FeeCollector, FeeCollectorInterface } from "../FeeCollector";
declare type FeeCollectorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161134c38038061134c83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6112b9806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c39781461023e578063e5d647661461026b578063eedd56e11461028b578063f2fde38b146102ab57600080fd5b8063bd0b380b146101eb578063c489744b1461020b578063e0cbc5f21461022b57600080fd5b806364bc5be1116100b057806364bc5be1146101645780637200b829146101845780638da5cb5b1461019957600080fd5b80630fe97f70146100d757806323452b9c1461012d578063461ad4f514610144575b600080fd5b3480156100e357600080fd5b5061011a6100f236600461101d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561013957600080fd5b506101426102cb565b005b34801561015057600080fd5b5061014261015f36600461101d565b610395565b34801561017057600080fd5b5061014261017f36600461106e565b61049b565b34801561019057600080fd5b50610142610665565b3480156101a557600080fd5b506000546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101f757600080fd5b5061014261020636600461101d565b61074b565b34801561021757600080fd5b5061011a610226366004611151565b61080f565b610142610239366004611184565b610849565b34801561024a57600080fd5b506001546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027757600080fd5b5061014261028636600461106e565b610995565b34801561029757600080fd5b506101426102a63660046111b9565b610b1f565b3480156102b757600080fd5b506101426102c636600461101d565b610c08565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604081205490819003610418575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812055610449823383610d66565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b8281101561065f5760036000858381518110610510576105106111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060006003600086848151811061056d5761056d6111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105d78482815181106105c8576105c86111ff565b60200260200101513384610d66565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610600576106006111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161064f91815260200190565b60405180910390a36001016104f2565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610788575050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107c590839083610d66565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200161048f565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600260209081526040808320938516835292905220545b92915050565b610853828461125d565b34101561088c576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260209081526040808320838052909152812080548592906108cc90849061125d565b9091555050600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff805484929061090c90849061125d565b909155506000905061091e838561125d565b6109289034611270565b9050801561093a5761093a3382610d9c565b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b8281101561065f5733600090815260026020526040812085519091908690849081106109c9576109c96111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915081600014610b175733600090815260026020526040812085518290879085908110610a3b57610a3b6111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a968482815181106105c8576105c86111ff565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610abf57610abf6111ff565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610b0e91815260200190565b60405180910390a35b60010161099b565b610b3284610b2d848661125d565b610dbc565b73ffffffffffffffffffffffffffffffffffffffff808216600090815260026020908152604080832093881683529290529081208054859290610b7690849061125d565b909155505073ffffffffffffffffffffffffffffffffffffffff841660009081526003602052604081208054849290610bb090849061125d565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610987565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c59576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ca6576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610cf5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615610d9257610d8d838383610e6d565b505050565b610d8d8282610edb565b60003860003884865af1610db85763b12d13eb6000526004601cfd5b5050565b80600003610df6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e4b5780341015610db8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db873ffffffffffffffffffffffffffffffffffffffff8316333084610f48565b73ffffffffffffffffffffffffffffffffffffffff8216610eba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d8d73ffffffffffffffffffffffffffffffffffffffff84168383610fa5565b73ffffffffffffffffffffffffffffffffffffffff8216610f28576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db873ffffffffffffffffffffffffffffffffffffffff831682610d9c565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610f9757637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610fea576390b8ec186000526004601cfd5b6000603452505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461101857600080fd5b919050565b60006020828403121561102f57600080fd5b61103882610ff4565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602080838503121561108157600080fd5b823567ffffffffffffffff8082111561109957600080fd5b818501915085601f8301126110ad57600080fd5b8135818111156110bf576110bf61103f565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156111025761110261103f565b60405291825284820192508381018501918883111561112057600080fd5b938501935b828510156111455761113685610ff4565b84529385019392850192611125565b98975050505050505050565b6000806040838503121561116457600080fd5b61116d83610ff4565b915061117b60208401610ff4565b90509250929050565b60008060006060848603121561119957600080fd5b83359250602084013591506111b060408501610ff4565b90509250925092565b600080600080608085870312156111cf57600080fd5b6111d885610ff4565b935060208501359250604085013591506111f460608601610ff4565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156108435761084361122e565b818103818111156108435761084361122e56fea2646970667358221220df763aeaeaed7a631c95fa2558abb093698123be979ba5678e4605fb9c14d87d64736f6c63430008110033";
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
