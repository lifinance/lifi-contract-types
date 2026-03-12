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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b50604051610ba8380380610ba8833981016040819052602b916069565b5f80546001600160a01b0319166001600160a01b038316908117909155606457604051631c49f4d160e01b815260040160405180910390fd5b506094565b5f602082840312156078575f5ffd5b81516001600160a01b0381168114608d575f5ffd5b9392505050565b610b07806100a15f395ff3fe608060405260043610610079575f3560e01c80637200b8291161004c5780637200b829146100e45780638da5cb5b146100f8578063e30c39781461014c578063f2fde38b14610178575f5ffd5b806301e336671461007d57806323452b9c1461009e57806327444dab146100b25780635d865df2146100d1575b5f5ffd5b348015610088575f5ffd5b5061009c610097366004610994565b610197565b005b3480156100a9575f5ffd5b5061009c61031c565b3480156100bd575f5ffd5b5061009c6100cc3660046109d2565b6103e5565b61009c6100df366004610a11565b6104fe565b3480156100ef575f5ffd5b5061009c610567565b348015610103575f5ffd5b505f546101239073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610157575f5ffd5b506001546101239073ffffffffffffffffffffffffffffffffffffffff1681565b348015610183575f5ffd5b5061009c610192366004610a3f565b61064b565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146101e7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661029e575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610258576040519150601f19603f3d011682016040523d82523d5f602084013e61025d565b606091505b5050905080610298576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506102bf565b6102bf73ffffffffffffffffffffffffffffffffffffffff841683836107a7565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461036c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166103bb576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561044f573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104739190610a61565b9050828111156104f85773ffffffffffffffffffffffffffffffffffffffff82166104ca576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f833836104d98685610aa5565b73ffffffffffffffffffffffffffffffffffffffff88169291906107f0565b50505050565b5f61050a343331610abe565b905082811115610557575f61051f8483610aa5565b9050348110610538576105335f8434610848565b6104f8565b6105435f8483610848565b6104f85f336105528434610aa5565b610848565b6105625f3334610848565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105b9576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461069b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166106e8576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610737576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166107e7576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661083b57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff831661086d576105628282610878565b6105628383836108e9565b73ffffffffffffffffffffffffffffffffffffffff82166108c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108e573ffffffffffffffffffffffffffffffffffffffff831682610957565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610936576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056273ffffffffffffffffffffffffffffffffffffffff841683836107a7565b5f385f3884865af16108e55763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610991575f5ffd5b50565b5f5f5f606084860312156109a6575f5ffd5b83356109b181610970565b925060208401356109c181610970565b929592945050506040919091013590565b5f5f5f606084860312156109e4575f5ffd5b83356109ef81610970565b9250602084013591506040840135610a0681610970565b809150509250925092565b5f5f60408385031215610a22575f5ffd5b823591506020830135610a3481610970565b809150509250929050565b5f60208284031215610a4f575f5ffd5b8135610a5a81610970565b9392505050565b5f60208284031215610a71575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610ab857610ab8610a78565b92915050565b80820180821115610ab857610ab8610a7856fea26469706673582212204bbfb79a9ea2c8d40bfb1d19d0e04aea99d7034a2dbff13f687fa812c142eac364736f6c634300081d0033";
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): OutputValidatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OutputValidator;
}
export {};
