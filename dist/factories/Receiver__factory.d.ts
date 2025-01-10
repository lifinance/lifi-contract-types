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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620025f9380380620025f9833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61244e80620001ab6000396000f3fe6080604052600436106100d65760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610236578063e30c397814610263578063f2fde38b14610290578063fd614f41146102b057600080fd5b80638da5cb5b146101c5578063ab8236f3146101f2578063bcf225e61461021257600080fd5b80634f91bc2b116100b05780634f91bc2b146101705780637200b829146101835780637aacd8f81461019857600080fd5b806301e33667146100e25780630517cb761461010457806323452b9c1461015b57600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004611a81565b6102d0565b005b34801561011057600080fd5b506002546101319073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561016757600080fd5b5061010261045a565b61010261017e366004611c42565b610524565b34801561018f57600080fd5b50610102610690565b3480156101a457600080fd5b506005546101319073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d157600080fd5b506000546101319073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fe57600080fd5b5061010261020d366004611dd4565b610776565b34801561021e57600080fd5b5061022860045481565b604051908152602001610152565b34801561024257600080fd5b506003546101319073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026f57600080fd5b506001546101319073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029c57600080fd5b506101026102ab366004611e78565b6108b3565b3480156102bc57600080fd5b506101026102cb366004611e9c565b610a11565b60005473ffffffffffffffffffffffffffffffffffffffff163314610321576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166103dc5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610396576040519150601f19603f3d011682016040523d82523d6000602084013e61039b565b606091505b50509050806103d6576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b506103fd565b6103fd73ffffffffffffffffffffffffffffffffffffffff84168383610b19565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ab576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166104fa576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161059f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff83166105d2576105cd85858585346000610b68565b610686565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa158015610645573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106699190611f1f565b90506106758482610fe9565b61068486868686856000610b68565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106e2576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016107f1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff163314610846576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060008480602001905181019061085f91906120fe565b935050925092506108a38383600085511161087a578961089a565b8460008151811061088d5761088d61216b565b6020026020010151604001515b848a6001610b68565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610904576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610951576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036109a0576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610a8c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610ae1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610af8919061219a565b91509150610b0b898389848c6000610b68565b505060009055505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610b5e576390b8ec186000526004601cfd5b6000603452505050565b600081610b76576000610b7a565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610e2e5760005a9050828015610ba857508181105b15610caf5760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610c07576040519150601f19603f3d011682016040523d82523d6000602084013e610c0c565b606091505b5050905080610c47576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505050610fe1565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610cd8858561221b565b908b8b8b8b6040518763ffffffff1660e01b8152600401610cfc949392919061227e565b6000604051808303818589803b158015610d1557600080fd5b5088f19450505050508015610d28575060015b610e285760008573ffffffffffffffffffffffffffffffffffffffff168560405160006040518083038185875af1925050503d8060008114610d86576040519150601f19603f3d011682016040523d82523d6000602084013e610d8b565b606091505b5050905080610dc6576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2505b50610fdf565b60005a6003549091508690610e5e9073ffffffffffffffffffffffffffffffffffffffff80841691166000611169565b838015610e6a57508282105b15610e9057610c4773ffffffffffffffffffffffffffffffffffffffff82168787611369565b600354610eb79073ffffffffffffffffffffffffffffffffffffffff8381169116876113bf565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610edf858561221b565b8b8b8b8b6040518663ffffffff1660e01b8152600401610f02949392919061227e565b600060405180830381600088803b158015610f1c57600080fd5b5087f193505050508015610f2e575060015b610fb457610f5373ffffffffffffffffffffffffffffffffffffffff82168787611369565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b600354610fdc9073ffffffffffffffffffffffffffffffffffffffff83811691166000611169565b50505b505b505050505050565b80600003611023576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661107c5780341015611078576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156110e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110d9190611f1f565b905081811015611158576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b611164833330856114be565b505050565b80158061120957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156111e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112079190611f1f565b155b611295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161114f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111649084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116d0565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526111649084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016112e7565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611435573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114599190611f1f565b90506114b8847f095ea7b3000000000000000000000000000000000000000000000000000000008561148b86866123b9565b60405173ffffffffffffffffffffffffffffffffffffffff909216602483015260448201526064016112e7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff841661150b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611558576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ed9190611f1f565b90506115fb828686866117df565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561166b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168f9190611f1f565b611699919061221b565b14610fe1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611732826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661183d9092919063ffffffff16565b905080516000148061175357508080602001905181019061175391906123cc565b611164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161114f565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114b89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016112e7565b606061184c8484600085611854565b949350505050565b6060824710156118e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161114f565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161190f91906123e9565b60006040518083038185875af1925050503d806000811461194c576040519150601f19603f3d011682016040523d82523d6000602084013e611951565b606091505b50915091506119628783838761196d565b979650505050505050565b60608315611a035782516000036119fc5773ffffffffffffffffffffffffffffffffffffffff85163b6119fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161114f565b508161184c565b61184c8383815115611a185781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114f9190612405565b73ffffffffffffffffffffffffffffffffffffffff81168114611a6e57600080fd5b50565b8035611a7c81611a4c565b919050565b600080600060608486031215611a9657600080fd5b8335611aa181611a4c565b92506020840135611ab181611a4c565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611b1457611b14611ac2565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b6157611b61611ac2565b604052919050565b600067ffffffffffffffff821115611b8357611b83611ac2565b5060051b60200190565b600067ffffffffffffffff821115611ba757611ba7611ac2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611be457600080fd5b8135611bf7611bf282611b8d565b611b1a565b818152846020838601011115611c0c57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611a6e57600080fd5b8035611a7c81611c29565b60008060008060808587031215611c5857600080fd5b84359350602085013567ffffffffffffffff80821115611c7757600080fd5b818701915087601f830112611c8b57600080fd5b8135611c99611bf282611b69565b8082825260208201915060208360051b86010192508a831115611cbb57600080fd5b602085015b83811015611da6578481351115611cd657600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611d0c57600080fd5b611d14611af1565b611d2060208301611a71565b8152611d2e60408301611a71565b6020820152611d3f60608301611a71565b6040820152611d5060808301611a71565b606082015260a0820135608082015260c082013587811115611d7157600080fd5b611d808f602083860101611bd3565b60a083015250611d9260e08301611c37565b60c082015284525060209283019201611cc0565b508097505050505050611dbb60408601611a71565b9150611dc960608601611a71565b905092959194509250565b60008060008060008060c08789031215611ded57600080fd5b863561ffff81168114611dff57600080fd5b9550602087013567ffffffffffffffff80821115611e1c57600080fd5b611e288a838b01611bd3565b96506040890135955060608901359150611e4182611a4c565b9093506080880135925060a08801359080821115611e5e57600080fd5b50611e6b89828a01611bd3565b9150509295509295509295565b600060208284031215611e8a57600080fd5b8135611e9581611a4c565b9392505050565b60008060008060008060c08789031215611eb557600080fd5b86359550602087013594506040870135611ece81611a4c565b93506060870135611ede81611a4c565b9250608087013563ffffffff81168114611ef757600080fd5b915060a087013567ffffffffffffffff811115611f1357600080fd5b611e6b89828a01611bd3565b600060208284031215611f3157600080fd5b5051919050565b8051611a7c81611a4c565b60005b83811015611f5e578181015183820152602001611f46565b50506000910152565b600082601f830112611f7857600080fd5b8151611f86611bf282611b8d565b818152846020838601011115611f9b57600080fd5b61184c826020830160208701611f43565b8051611a7c81611c29565b600082601f830112611fc857600080fd5b81516020611fd8611bf283611b69565b82815260059290921b84018101918181019086841115611ff757600080fd5b8286015b848110156120f357805167ffffffffffffffff8082111561201c5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156120555760008081fd5b61205d611af1565b612068888501611f38565b81526040612077818601611f38565b898301526060612088818701611f38565b828401526080915061209b828701611f38565b818401525060a0808601518284015260c0915081860151858111156120c05760008081fd5b6120ce8f8c838a0101611f67565b8285015250506120df838601611fac565b908201528652505050918301918301611ffb565b509695505050505050565b6000806000806080858703121561211457600080fd5b84519350602085015167ffffffffffffffff81111561213257600080fd5b61213e87828801611fb7565b935050604085015161214f81611a4c565b606086015190925061216081611a4c565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080604083850312156121ad57600080fd5b825167ffffffffffffffff8111156121c457600080fd5b6121d085828601611fb7565b92505060208301516121e181611a4c565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561222e5761222e6121ec565b92915050565b6000815180845261224c816020860160208601611f43565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015612369577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061233d82870182612234565b91505060c08083015192506123558187018415159052565b5095870195935050908501906001016122ac565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550612394945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b8082018082111561222e5761222e6121ec565b6000602082840312156123de57600080fd5b8151611e9581611c29565b600082516123fb818460208701611f43565b9190910192915050565b602081526000611e95602083018461223456fea2646970667358221220fbcd3bf3763d68b6d470d0ecbf8b4faa8a8e01b79f591d983325052fa4b82f7064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_sgRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amarokRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_recoverGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "amarokRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "executor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
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
        readonly name: "recoverGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sgReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sgRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "swapAndCompleteBridgeTokens";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
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
        readonly type: "function";
        readonly name: "xReceive";
        readonly inputs: readonly [{
            readonly name: "_transferId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AmarokRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ExecutorSet";
        readonly inputs: readonly [{
            readonly name: "executor";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "RecoverGasSet";
        readonly inputs: readonly [{
            readonly name: "recoverGas";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "StargateRouterSet";
        readonly inputs: readonly [{
            readonly name: "router";
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
        readonly name: "InvalidAmount";
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
        readonly name: "NoTransferToNullAddress";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Receiver;
}
export {};
