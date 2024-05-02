import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZip, GasZipInterface } from "../../GasZip.sol/GasZip";
declare type GasZipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZip__factory extends ContractFactory {
    constructor(...args: GasZipConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _uniswapRouter: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZip>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _uniswapRouter: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZip;
    connect(signer: Signer): GasZip__factory;
    static readonly bytecode = "0x60e0604052600060805234801561001557600080fd5b50604051610d52380380610d528339810160408190526100349161007b565b600080546001600160a01b0319166001600160a01b0394851617905590821660a0521660c0526100be565b80516001600160a01b038116811461007657600080fd5b919050565b60008060006060848603121561009057600080fd5b6100998461005f565b92506100a76020850161005f565b91506100b56040850161005f565b90509250925092565b60805160a05160c051610c496101096000396000818161023c015281816103e101526106af0152600081816101db015261087801526000818161010801526108dc0152610c496000f3fe6080604052600436106100c75760003560e01c8063735de9f711610074578063cdeab0721161004e578063cdeab0721461025e578063e30c39781461027e578063f2fde38b146102ab57600080fd5b8063735de9f7146101c95780638da5cb5b146101fd578063ba956b9a1461022a57600080fd5b80635b458dc8116100a55780635b458dc8146101545780635bc35ae8146101945780637200b829146101b457600080fd5b806323452b9c146100cc57806344ef2640146100e357806358fa63ca146100f6575b600080fd5b3480156100d857600080fd5b506100e16102cb565b005b6100e16100f1366004610b28565b610395565b34801561010257600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561016057600080fd5b5061018461016f366004610b5d565b60026020526000908152604090205460ff1681565b604051901515815260200161014b565b3480156101a057600080fd5b506100e16101af366004610b78565b6104c7565b3480156101c057600080fd5b506100e161056e565b3480156101d557600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561020957600080fd5b5060005461012a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023657600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561026a57600080fd5b506100e1610279366004610bb4565b610654565b34801561028a57600080fd5b5060015461012a9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102b757600080fd5b506100e16102c6366004610b5d565b610716565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b5050604051600093503392504791508381818185875af1925050503d8060008114610481576040519150601f19603f3d011682016040523d82523d6000602084013e610486565b606091505b50509050806104c1576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610518576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105c0576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b60006106608585610874565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff84811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b50505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610767576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107b4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610803576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663414bf3896040518061010001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001610bb862ffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff16815260200142815260200161094e87610a46565b815260208082018790526000604092830152815160e085811b7fffffffff00000000000000000000000000000000000000000000000000000000168252845173ffffffffffffffffffffffffffffffffffffffff908116600484015292850151831660248301529284015162ffffff1660448201526060840151821660648201526080840151608482015260a084015160a482015260c084015160c482015292909101511660e4820152610104016020604051808303816000875af1158015610a1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3f9190610bfa565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610af7576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ace573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af29190610bfa565b610af9565b475b92915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b2357600080fd5b919050565b600080600060608486031215610b3d57600080fd5b8335925060208401359150610b5460408501610aff565b90509250925092565b600060208284031215610b6f57600080fd5b610a3f82610aff565b60008060408385031215610b8b57600080fd5b610b9483610aff565b915060208301358015158114610ba957600080fd5b809150509250929050565b60008060008060808587031215610bca57600080fd5b610bd385610aff565b93506020850135925060408501359150610bef60608601610aff565b905092959194509250565b600060208284031215610c0c57600080fd5b505191905056fea26469706673582212200d2f433a8e93ca1486f422c59547da4aaf5358e9449a9f13455982a905dc964b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_uniswapRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ZERO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowedInboundTokens";
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
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
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
        readonly name: "uniswapRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISwapRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "zip";
        readonly inputs: readonly [{
            readonly name: "amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "zipERC20";
        readonly inputs: readonly [{
            readonly name: "fromToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "GasZipFailed";
        readonly inputs: readonly [{
            readonly name: "";
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
        readonly name: "SwapFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZip;
}
export {};
