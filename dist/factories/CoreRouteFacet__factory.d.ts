import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CoreRouteFacet, CoreRouteFacetInterface } from "../CoreRouteFacet";
type CoreRouteFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CoreRouteFacet__factory extends ContractFactory {
    constructor(...args: CoreRouteFacetConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CoreRouteFacet>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CoreRouteFacet;
    connect(signer: Signer): CoreRouteFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5060405161154e38038061154e833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b0383169081179091556064576040516306b7c75960e31b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b6114ad806100a15f395ff3fe60806040526004361061006e575f3560e01c80637200b8291161004c5780637200b829146100cd5780638da5cb5b146100e1578063e30c397814610131578063f2fde38b1461015d575f5ffd5b806301e336671461007257806323452b9c146100935780632646478b146100a7575b5f5ffd5b34801561007d575f5ffd5b5061009161008c3660046112ef565b61017c565b005b34801561009e575f5ffd5b50610091610301565b6100ba6100b536600461132d565b6103ca565b6040519081526020015b60405180910390f35b3480156100d8575f5ffd5b5061009161046b565b3480156100ec575f5ffd5b505f5461010c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c4565b34801561013c575f5ffd5b5060015461010c9073ffffffffffffffffffffffffffffffffffffffff1681565b348015610168575f5ffd5b506100916101773660046113e5565b61054f565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101cc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610283575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461023d576040519150601f19603f3d011682016040523d82523d5f602084013e610242565b606091505b505090508061027d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102a4565b6102a473ffffffffffffffffffffffffffffffffffffffff841683836106ab565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610351576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103a0576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80545f91907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610448576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561045b898989898989896106f4565b91505f9055979650505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104bd576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461059f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166105ec576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361063b576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166106eb576390b8ec185f526004601cfd5b5f603452505050565b5f8073ffffffffffffffffffffffffffffffffffffffff8916156107a3576040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8a16906370a0823190602401602060405180830381865afa15801561077a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061079e9190611407565b6107a5565b5f5b90505f73ffffffffffffffffffffffffffffffffffffffff881615610857576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301528916906370a0823190602401602060405180830381865afa15801561082e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108529190611407565b610870565b8573ffffffffffffffffffffffffffffffffffffffff16315b90505f61087f8b8b8888610b31565b90505f73ffffffffffffffffffffffffffffffffffffffff8c161561092f576040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8d16906370a0823190602401602060405180830381865afa158015610906573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061092a9190611407565b610931565b5f5b90508361093e8c8361144b565b10156109905761094e8b8261144b565b6040517f583af5860000000000000000000000000000000000000000000000000000000081526004810191909152602481018590526044015b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff8b1615610a40576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528c16906370a0823190602401602060405180830381865afa158015610a17573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a3b9190611407565b610a59565b8873ffffffffffffffffffffffffffffffffffffffff16315b9050610a658a8561144b565b811015610aab57610a768482611464565b6040517f963b34a500000000000000000000000000000000000000000000000000000000815260040161098791815260200190565b610ab58482611464565b6040805173ffffffffffffffffffffffffffffffffffffffff8c81168252602082018790529181018d905260608101839052919750808d1691908f169033907f2db5ddd0b42bdbca0d69ea16f234a870a485854ae0d91f16643d6f317d8b89949060800160405180910390a45050505050979650505050505050565b604080516020601f840181900481028201810190925282815284915f918291610b74919087908790819084018382808284375f92019190915250610c5692505050565b90505b805160208201511115610c4c5780518051600191820183525f1a90819003610bb6575f610ba383610c78565b9050835f03610bb0578094505b50610c40565b8060ff16600203610bd057610bcb8288610d3a565b610c40565b8060ff16600303610be5575f610ba383610d59565b8060ff16600403610bf957610bcb82610d6b565b8060ff16600503610c0e57610bcb8883610d89565b6040517fb926a1f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82600101925050610b77565b5050949350505050565b8051604080516020808501825292909301820191830191909152818101905290565b80518051601490910182525f90819060601c6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915073ffffffffffffffffffffffffffffffffffffffff8216906370a0823190602401602060405180830381865afa158015610cf5573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d199190611407565b91508115610d28576001820391505b610d3483308385610ded565b50919050565b815180516014909101835260601c610d5483338385610ded565b505050565b47610d6682305f84610ded565b919050565b805180516014909101825260601c610d85825f8381610e47565b5050565b80518051602082018084525160408301808552516041840180865251606185018087525160819095018652929391925f9190911a91610de473ffffffffffffffffffffffffffffffffffffffff881633308888888888611018565b50505050505050565b83518051600190910185525f90811a905b8160ff16811015610e3f57855180516002909101875261ffff60f09190911c848102919091049384900393610e3588888884610e47565b5050600101610dfe565b505050505050565b5f610e5185611281565b90505f610e5f826020015190565b82517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc01600484019081529091505f610efa837fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b905073ffffffffffffffffffffffffffffffffffffffff8116610f49576040517fdc66f67300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f606060405185815260048101608081528a6020820152896040820152886060820152608081019050855180825280602083018260208a0160045afa5060a4601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160190505f808284885af4910160408190523d808252919350915060208201815f823e601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016016040528161100c5761100c816112c1565b50505050505050505050565b6040517f7ecebe0000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301525f91908a1690637ecebe0090602401602060405180830381865afa158015611085573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110a99190611407565b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528981166024830152604482018990526064820188905260ff8716608483015260a4820186905260c48201859052919250908a169063d505accf9060e4015f604051808303815f87803b158015611140575f5ffd5b505af1158015611152573d5f5f3e3d5ffd5b50506040517f7ecebe0000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b811660048301525f93508c169150637ecebe0090602401602060405180830381865afa1580156111c2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111e69190611407565b90506111f382600161144b565b811461100c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5361666545524332303a207065726d697420646964206e6f742073756363656560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610987565b805180516002909101825260609060f01c8015610d34575f8351905060405192506020820183016040528183528160208401838360045afa500190915290565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff811681146112ec575f5ffd5b50565b5f5f5f60608486031215611301575f5ffd5b833561130c816112cb565b9250602084013561131c816112cb565b929592945050506040919091013590565b5f5f5f5f5f5f5f60c0888a031215611343575f5ffd5b873561134e816112cb565b9650602088013595506040880135611365816112cb565b945060608801359350608088013561137c816112cb565b925060a088013567ffffffffffffffff811115611397575f5ffd5b8801601f81018a136113a7575f5ffd5b803567ffffffffffffffff8111156113bd575f5ffd5b8a60208284010111156113ce575f5ffd5b602082019350809250505092959891949750929550565b5f602082840312156113f5575f5ffd5b8135611400816112cb565b9392505050565b5f60208284031215611417575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082018082111561145e5761145e61141e565b92915050565b8181038181111561145e5761145e61141e56fea264697066735822122056216907b4a7fb806b2c71751d4f5fe17786fc10b022777d5c905ca5c9d2dc3964736f6c634300081d0033";
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
        readonly name: "processRoute";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "route";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
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
        readonly name: "Route";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "tokenIn";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "MinimalInputBalanceViolation";
        readonly inputs: readonly [{
            readonly name: "available";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "MinimalOutputBalanceViolation";
        readonly inputs: readonly [{
            readonly name: "amountOut";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SwapFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnknownCommandCode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnknownSelector";
        readonly inputs: readonly [];
    }];
    static createInterface(): CoreRouteFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CoreRouteFacet;
}
export {};
