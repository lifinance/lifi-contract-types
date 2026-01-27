import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WETH, WETHInterface } from "../WETH";
type WETHConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WETH__factory extends ContractFactory {
    constructor(...args: WETHConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WETH>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WETH;
    connect(signer: Signer): WETH__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610afc806100206000396000f3fe6080604052600436106100e15760003560e01c806370a082311161007f578063a9059cbb11610059578063a9059cbb14610376578063d0e30db014610396578063d505accf1461039e578063dd62ed3e146103be57600080fd5b806370a08231146102ca5780637ecebe00146102fd57806395d89b411461033057600080fd5b806323b872dd116100bb57806323b872dd146101a45780632e1a7d4d146101c4578063313ce567146101e45780633644e5151461020057600080fd5b806306fdde03146100f5578063095ea7b31461014d57806318160ddd1461017d57600080fd5b366100f0576100ee6103f4565b005b600080fd5b34801561010157600080fd5b5060408051808201909152600d81527f577261707065642045746865720000000000000000000000000000000000000060208201525b60405161014491906108ea565b60405180910390f35b34801561015957600080fd5b5061016d61016836600461097f565b61042b565b6040519015158152602001610144565b34801561018957600080fd5b506805345cdf77eb68f44c545b604051908152602001610144565b3480156101b057600080fd5b5061016d6101bf3660046109a9565b61047e565b3480156101d057600080fd5b506100ee6101df3660046109e5565b61053c565b3480156101f057600080fd5b5060405160128152602001610144565b34801561020c57600080fd5b50604080518082018252600d81527f577261707065642045746865720000000000000000000000000000000000000060209182015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527ecd3d46df44f2cbb950cf84eb2e92aa2ddd23195b1a009173ea59a063357ed3918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69181019190915246606082015230608082015260a09020610196565b3480156102d657600080fd5b506101966102e53660046109fe565b6387a211a2600c908152600091909152602090205490565b34801561030957600080fd5b506101966103183660046109fe565b6338377508600c908152600091909152602090205490565b34801561033c57600080fd5b5060408051808201909152600481527f57455448000000000000000000000000000000000000000000000000000000006020820152610137565b34801561038257600080fd5b5061016d61039136600461097f565b610590565b6100ee6103f4565b3480156103aa57600080fd5b506100ee6103b9366004610a20565b61060b565b3480156103ca57600080fd5b506101966103d9366004610a93565b602052637f5e9f20600c908152600091909152603490205490565b6103fe33346107e7565b34600052337fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60206000a2565b600082602052637f5e9f20600c5233600052816034600c205581600052602c5160601c337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560206000a350600192915050565b60008360601b33602052637f5e9f208117600c526034600c20805460018101156104be57808511156104b8576313be252b6000526004601cfd5b84810382555b50506387a211a28117600c526020600c208054808511156104e75763f4d678b86000526004601cfd5b84810382555050836000526020600c208381540181555082602052600c5160601c8160601c7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a3505060019392505050565b6105463382610866565b80600052337f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560206000a260003860003884335af161058d5763b12d13eb6000526004601cfd5b50565b60006387a211a2600c52336000526020600c208054808411156105bb5763f4d678b86000526004601cfd5b83810382555050826000526020600c208281540181555081602052600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a350600192915050565b60408051808201909152600d81527f57726170706564204574686572000000000000000000000000000000000000006020909101527ecd3d46df44f2cbb950cf84eb2e92aa2ddd23195b1a009173ea59a063357ed38442111561067657631a15a3cc6000526004601cfd5b6040518860601b60601c98508760601b60601c975065383775081901600e52886000526020600c2080547f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f83528360208401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6604084015246606084015230608084015260a08320602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c983528a60208401528960408401528860608401528060808401528760a084015260c08320604e526042602c206000528660ff1660205285604052846060526020806080600060015afa8b3d51146107825763ddafbaef6000526004601cfd5b019055777f5e9f20000000000000000000000000000000000000000088176040526034602c2087905587897f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925602060608501a360405250506000606052505050505050565b6805345cdf77eb68f44c548181018181101561080b5763e5cfe9576000526004601cfd5b806805345cdf77eb68f44c5550506387a211a2600c52816000526020600c208181540181555080602052600c5160601c60007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a35050565b6387a211a2600c52816000526020600c2080548083111561088f5763f4d678b86000526004601cfd5b82900390556805345cdf77eb68f44c80548290039055600081815273ffffffffffffffffffffffffffffffffffffffff83167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a35050565b600060208083528351808285015260005b81811015610917578581018301518582016040015282016108fb565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461097a57600080fd5b919050565b6000806040838503121561099257600080fd5b61099b83610956565b946020939093013593505050565b6000806000606084860312156109be57600080fd5b6109c784610956565b92506109d560208501610956565b9150604084013590509250925092565b6000602082840312156109f757600080fd5b5035919050565b600060208284031215610a1057600080fd5b610a1982610956565b9392505050565b600080600080600080600060e0888a031215610a3b57600080fd5b610a4488610956565b9650610a5260208901610956565b95506040880135945060608801359350608088013560ff81168114610a7657600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610aa657600080fd5b610aaf83610956565b9150610abd60208401610956565b9050925092905056fea26469706673582212205f376ba6411c09bd884e6fa936d17c021b3ab4a0d03d1b6e44a2627fbdc56b1164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdrawal";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AllowanceOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AllowanceUnderflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ETHTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAllowance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPermit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PermitExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TotalSupplyOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): WETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH;
}
export {};
