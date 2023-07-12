import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Receiver, ReceiverInterface } from "../Receiver";
declare type ReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Receiver__factory extends ContractFactory {
    constructor(...args: ReceiverConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Receiver>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _sgRouter: PromiseOrValue<string>, _amarokRouter: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _recoverGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Receiver;
    connect(signer: Signer): Receiver__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620024ea380380620024ea833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61233f80620001ab6000396000f3fe6080604052600436106100d65760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610236578063e30c397814610263578063f2fde38b14610290578063fd614f41146102b057600080fd5b80638da5cb5b146101c5578063ab8236f3146101f2578063bcf225e61461021257600080fd5b80634f91bc2b116100b05780634f91bc2b146101705780637200b829146101835780637aacd8f81461019857600080fd5b80630517cb76146100e257806323452b9c146101395780632e1445791461015057600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b5060025461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014557600080fd5b5061014e6102d0565b005b34801561015c57600080fd5b5061014e61016b3660046119a1565b61039a565b61014e61017e366004611b62565b6104cc565b34801561018f57600080fd5b5061014e610638565b3480156101a457600080fd5b5060055461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d157600080fd5b5060005461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fe57600080fd5b5061014e61020d366004611cf4565b61071e565b34801561021e57600080fd5b5061022860045481565b604051908152602001610130565b34801561024257600080fd5b5060035461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026f57600080fd5b5060015461010f9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029c57600080fd5b5061014e6102ab366004611d98565b61082d565b3480156102bc57600080fd5b5061014e6102cb366004611dbc565b61098b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610321576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610370576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103eb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104a65760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610460576040519150601f19603f3d011682016040523d82523d6000602084013e610465565b606091505b50509050806104a0576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6104c773ffffffffffffffffffffffffffffffffffffffff84168383610a93565b505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610547576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff831661057a5761057585858585346000610b67565b61062e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa1580156105ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106119190611e3f565b905061061d8482610fe8565b61062c86868686856000610b67565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461068a576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610799576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff1633146107ee576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600084806020019051810190610807919061201e565b9350509250925061081d838389848a6001610b67565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461087e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166108cb576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361091a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a06576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610a5b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610a72919061208b565b91509150610a85898389848c6000610b67565b505060009055505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611163565b600081610b75576000610b79565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610e2d5760005a9050828015610ba757508181105b15610cae5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610c06576040519150601f19603f3d011682016040523d82523d6000602084013e610c0b565b606091505b5050905080610c46576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505050610fe0565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610cd7858561210c565b908b8b8b8b6040518763ffffffff1660e01b8152600401610cfb949392919061216f565b6000604051808303818589803b158015610d1457600080fd5b5088f19450505050508015610d27575060015b610e275760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610d85576040519150601f19603f3d011682016040523d82523d6000602084013e610d8a565b606091505b5050905080610dc5576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b50610fde565b60005a6003549091508690610e5d9073ffffffffffffffffffffffffffffffffffffffff80841691166000611272565b838015610e6957508282105b15610e8f57610c4673ffffffffffffffffffffffffffffffffffffffff82168787610a93565b600354610eb69073ffffffffffffffffffffffffffffffffffffffff8381169116876113f4565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610ede858561210c565b8b8b8b8b6040518663ffffffff1660e01b8152600401610f01949392919061216f565b600060405180830381600088803b158015610f1b57600080fd5b5087f193505050508015610f2d575060015b610fb357610f5273ffffffffffffffffffffffffffffffffffffffff82168787610a93565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b600354610fdb9073ffffffffffffffffffffffffffffffffffffffff83811691166000611272565b50505b505b505050505050565b80600003611022576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661107b5780341015611077576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156110e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110c9190611e3f565b905081811015611157576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104c7833330856114ed565b60006111c5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116ff9092919063ffffffff16565b90508051600014806111e65750808060200190518101906111e691906122aa565b6104c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161114e565b80158061131257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156112ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113109190611e3f565b155b61139e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161114e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104c79084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610ae5565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561146a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148e9190611e3f565b90506104a0847f095ea7b300000000000000000000000000000000000000000000000000000000856114c086866122c7565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610ae5565b73ffffffffffffffffffffffffffffffffffffffff841661153a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611587576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161c9190611e3f565b905061162a82868686611716565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561169a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116be9190611e3f565b6116c8919061210c565b14610fe0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606061170e8484600085611774565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104a09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610ae5565b606082471015611806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161114e565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161182f91906122da565b60006040518083038185875af1925050503d806000811461186c576040519150601f19603f3d011682016040523d82523d6000602084013e611871565b606091505b50915091506118828783838761188d565b979650505050505050565b6060831561192357825160000361191c5773ffffffffffffffffffffffffffffffffffffffff85163b61191c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161114e565b508161170e565b61170e83838151156119385781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114e91906122f6565b73ffffffffffffffffffffffffffffffffffffffff8116811461198e57600080fd5b50565b803561199c8161196c565b919050565b6000806000606084860312156119b657600080fd5b83356119c18161196c565b925060208401356119d18161196c565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611a3457611a346119e2565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a8157611a816119e2565b604052919050565b600067ffffffffffffffff821115611aa357611aa36119e2565b5060051b60200190565b600067ffffffffffffffff821115611ac757611ac76119e2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611b0457600080fd5b8135611b17611b1282611aad565b611a3a565b818152846020838601011115611b2c57600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461198e57600080fd5b803561199c81611b49565b60008060008060808587031215611b7857600080fd5b84359350602085013567ffffffffffffffff80821115611b9757600080fd5b818701915087601f830112611bab57600080fd5b8135611bb9611b1282611a89565b8082825260208201915060208360051b86010192508a831115611bdb57600080fd5b602085015b83811015611cc6578481351115611bf657600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611c2c57600080fd5b611c34611a11565b611c4060208301611991565b8152611c4e60408301611991565b6020820152611c5f60608301611991565b6040820152611c7060808301611991565b606082015260a0820135608082015260c082013587811115611c9157600080fd5b611ca08f602083860101611af3565b60a083015250611cb260e08301611b57565b60c082015284525060209283019201611be0565b508097505050505050611cdb60408601611991565b9150611ce960608601611991565b905092959194509250565b60008060008060008060c08789031215611d0d57600080fd5b863561ffff81168114611d1f57600080fd5b9550602087013567ffffffffffffffff80821115611d3c57600080fd5b611d488a838b01611af3565b96506040890135955060608901359150611d618261196c565b9093506080880135925060a08801359080821115611d7e57600080fd5b50611d8b89828a01611af3565b9150509295509295509295565b600060208284031215611daa57600080fd5b8135611db58161196c565b9392505050565b60008060008060008060c08789031215611dd557600080fd5b86359550602087013594506040870135611dee8161196c565b93506060870135611dfe8161196c565b9250608087013563ffffffff81168114611e1757600080fd5b915060a087013567ffffffffffffffff811115611e3357600080fd5b611d8b89828a01611af3565b600060208284031215611e5157600080fd5b5051919050565b805161199c8161196c565b60005b83811015611e7e578181015183820152602001611e66565b50506000910152565b600082601f830112611e9857600080fd5b8151611ea6611b1282611aad565b818152846020838601011115611ebb57600080fd5b61170e826020830160208701611e63565b805161199c81611b49565b600082601f830112611ee857600080fd5b81516020611ef8611b1283611a89565b82815260059290921b84018101918181019086841115611f1757600080fd5b8286015b8481101561201357805167ffffffffffffffff80821115611f3c5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611f755760008081fd5b611f7d611a11565b611f88888501611e58565b81526040611f97818601611e58565b898301526060611fa8818701611e58565b8284015260809150611fbb828701611e58565b818401525060a0808601518284015260c091508186015185811115611fe05760008081fd5b611fee8f8c838a0101611e87565b828501525050611fff838601611ecc565b908201528652505050918301918301611f1b565b509695505050505050565b6000806000806080858703121561203457600080fd5b84519350602085015167ffffffffffffffff81111561205257600080fd5b61205e87828801611ed7565b935050604085015161206f8161196c565b60608601519092506120808161196c565b939692955090935050565b6000806040838503121561209e57600080fd5b825167ffffffffffffffff8111156120b557600080fd5b6120c185828601611ed7565b92505060208301516120d28161196c565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561211f5761211f6120dd565b92915050565b6000815180845261213d816020860160208601611e63565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b8381101561225a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061222e82870182612125565b91505060c08083015192506122468187018415159052565b50958701959350509085019060010161219d565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550612285945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b6000602082840312156122bc57600080fd5b8151611db581611b49565b8082018082111561211f5761211f6120dd565b600082516122ec818460208701611e63565b9190910192915050565b602081526000611db5602083018461212556fea264697066735822122094e148c7242bc149dfc7d277c541d2fc4cfa0ba98322d89b03ad12edaf2d3d9d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_sgRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_amarokRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_executor";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_recoverGas";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExternalCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewOwnerMustNotBeSelf";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoNullOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingOwnershipTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPendingOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnAuthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "AmarokRouterSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "executor";
            readonly type: "address";
        }];
        readonly name: "ExecutorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferRequested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recoverGas";
            readonly type: "uint256";
        }];
        readonly name: "RecoverGasSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }];
        readonly name: "StargateRouterSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "amarokRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cancelOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "confirmOwnershipTransfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executor";
        readonly outputs: readonly [{
            readonly internalType: "contract IExecutor";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "pullToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recoverGas";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amountLD";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "sgReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sgRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transactionId";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "assetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_transferId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_asset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_callData";
            readonly type: "bytes";
        }];
        readonly name: "xReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
