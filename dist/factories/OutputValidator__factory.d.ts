import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OutputValidator, OutputValidatorInterface } from "../OutputValidator";
type OutputValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OutputValidator__factory extends ContractFactory {
    constructor(...args: OutputValidatorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OutputValidator>;
    getDeployTransaction(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OutputValidator;
    connect(signer: Signer): OutputValidator__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610d12380380610d12833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b038316908117909155606457604051631c49f4d160e01b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b610c71806100a15f395ff3fe608060405260043610610079575f3560e01c80637200b8291161004c5780637200b829146100e45780638da5cb5b146100f8578063e30c39781461014c578063f2fde38b14610178575f5ffd5b806301e336671461007d57806323452b9c1461009e57806327444dab146100b25780635d865df2146100d1575b5f5ffd5b348015610088575f5ffd5b5061009c610097366004610afe565b610197565b005b3480156100a9575f5ffd5b5061009c61031c565b3480156100bd575f5ffd5b5061009c6100cc366004610b3c565b6103e5565b61009c6100df366004610b7b565b610505565b3480156100ef575f5ffd5b5061009c610615565b348015610103575f5ffd5b505f546101239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610157575f5ffd5b506001546101239073ffffffffffffffffffffffffffffffffffffffff1681565b348015610183575f5ffd5b5061009c610192366004610ba9565b6106f9565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661029e575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610258576040519150601f19603f3d011682016040523d82523d5f602084013e61025d565b606091505b5050905080610298576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102bf565b6102bf73ffffffffffffffffffffffffffffffffffffffff84168383610855565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461036c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103bb576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561044f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104739190610bcb565b9050828111156104ff575f6104888483610c0f565b90506104968533858461089e565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f29991351642fce7de30ac927d88ce3a9cfea9ec0b607b508e6d1060e19221b82836040516104f591815260200190565b60405180910390a3505b50505050565b5f610511343331610c28565b9050828111156105ff575f6105268483610c0f565b905034811061059357341561058e576105405f843461095a565b60405134815273ffffffffffffffffffffffffffffffffffffffff8416905f907f29991351642fce7de30ac927d88ce3a9cfea9ec0b607b508e6d1060e19221b829060200160405180910390a35b6104ff565b61059e5f848361095a565b60405181815273ffffffffffffffffffffffffffffffffffffffff8416905f907f29991351642fce7de30ac927d88ce3a9cfea9ec0b607b508e6d1060e19221b829060200160405180910390a36104ff5f336105fa8434610c0f565b61095a565b3415610610576106105f333461095a565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610667576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610749576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610796576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036107e5576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610895576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff84166108eb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610938576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ff73ffffffffffffffffffffffffffffffffffffffff851684848461098a565b73ffffffffffffffffffffffffffffffffffffffff831661097f5761061082826109e2565b610610838383610a53565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166109d557637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a2f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a4f73ffffffffffffffffffffffffffffffffffffffff831682610ac1565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610aa0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61061073ffffffffffffffffffffffffffffffffffffffff84168383610855565b5f385f3884865af1610a4f5763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610afb575f5ffd5b50565b5f5f5f60608486031215610b10575f5ffd5b8335610b1b81610ada565b92506020840135610b2b81610ada565b929592945050506040919091013590565b5f5f5f60608486031215610b4e575f5ffd5b8335610b5981610ada565b9250602084013591506040840135610b7081610ada565b809150509250925092565b5f5f60408385031215610b8c575f5ffd5b823591506020830135610b9e81610ada565b809150509250929050565b5f60208284031215610bb9575f5ffd5b8135610bc481610ada565b9392505050565b5f60208284031215610bdb575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c2257610c22610be2565b92915050565b80820180821115610c2257610c22610be256fea2646970667358221220fc1d6f54e22b38cbdf9c29bd39771d893ad00f287e24ec131bca944980288f6164736f6c634300081d0033";
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
        readonly name: "validateERC20Output";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "expectedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validationWalletAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "validateNativeOutput";
        readonly inputs: readonly [{
            readonly name: "expectedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "validationWalletAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "OutputValidated";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "validationWallet";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "excessAmount";
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
        readonly name: "InvalidCallData";
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
    static createInterface(): OutputValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OutputValidator;
}
export {};
