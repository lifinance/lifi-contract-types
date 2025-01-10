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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200261d3803806200261d833981016040819052620000349162000134565b600080546001600160a01b038088166001600160a01b031992831617835560028054888316908416811790915560058054888416908516179055600380549287169290931691909117909155600483905560405190917f806d08432293677cc7e3e0f9443dcf0459f82567573d5094da6e9e6129dea4ab91a26040516001600160a01b038416907fcc6aaf791b8b7c6167981db821320441082903e27343e380dca76afd5807577d90600090a260405181907ffd178559652d65eca585044f34f8688859896a9bebaa7530dbe97c5c527320d590600090a250505050506200019b565b80516001600160a01b03811681146200012f57600080fd5b919050565b600080600080600060a086880312156200014d57600080fd5b620001588662000117565b9450620001686020870162000117565b9350620001786040870162000117565b9250620001886060870162000117565b9150608086015190509295509295909350565b61247280620001ab6000396000f3fe6080604052600436106100e15760003560e01c80638da5cb5b1161007f578063c34c08e511610059578063c34c08e514610261578063e30c39781461028e578063f2fde38b146102bb578063fd614f41146102db57600080fd5b80638da5cb5b146101f0578063ab8236f31461021d578063bcf225e61461023d57600080fd5b80632e144579116100bb5780632e1445791461017b5780634f91bc2b1461019b5780637200b829146101ae5780637aacd8f8146101c357600080fd5b806301e33667146100ed5780630517cb761461010f57806323452b9c1461016657600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004611aa5565b6102fb565b005b34801561011b57600080fd5b5060025461013c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561017257600080fd5b5061010d610485565b34801561018757600080fd5b5061010d610196366004611aa5565b61054f565b61010d6101a9366004611c66565b6105eb565b3480156101ba57600080fd5b5061010d610757565b3480156101cf57600080fd5b5060055461013c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101fc57600080fd5b5060005461013c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561022957600080fd5b5061010d610238366004611df8565b61083d565b34801561024957600080fd5b5061025360045481565b60405190815260200161015d565b34801561026d57600080fd5b5060035461013c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561029a57600080fd5b5060015461013c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102c757600080fd5b5061010d6102d6366004611e9c565b61097a565b3480156102e757600080fd5b5061010d6102f6366004611ec0565b610ad8565b60005473ffffffffffffffffffffffffffffffffffffffff16331461034c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104075760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103c1576040519150601f19603f3d011682016040523d82523d6000602084013e6103c6565b606091505b5050905080610401576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610428565b61042873ffffffffffffffffffffffffffffffffffffffff84168383610be0565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104d6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610525576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105a0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166105ca576105c58282610c2f565b505050565b6105c573ffffffffffffffffffffffffffffffffffffffff84168383610c4f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610666576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff83166106995761069485858585346000610d23565b61074d565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff85169063dd62ed3e90604401602060405180830381865afa15801561070c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107309190611f43565b905061073c84826110ea565b61074b86868686856000610d23565b505b6000905550505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146107a9576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016108b8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560025473ffffffffffffffffffffffffffffffffffffffff16331461090d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806000848060200190518101906109269190612122565b9350509250925061096a838360008551116109415789610961565b846000815181106109545761095461218f565b6020026020010151604001515b848a6001610d23565b5050600090915550505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109cb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610a18576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610a67576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610b53576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560055473ffffffffffffffffffffffffffffffffffffffff163314610ba8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008083806020019051810190610bbf91906121be565b91509150610bd2898389848c6000610d23565b505060009055505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610c25576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610c4b5763b12d13eb6000526004601cfd5b5050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105c59084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611261565b600081610d31576000610d35565b6004545b905073ffffffffffffffffffffffffffffffffffffffff8516610ec75760005a9050828015610d6357508181105b15610dd957610d728585610c2f565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250506110e2565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b85610e02858561223f565b908b8b8b8b6040518763ffffffff1660e01b8152600401610e2694939291906122a2565b6000604051808303818589803b158015610e3f57600080fd5b5088f19450505050508015610e52575060015b610ec157610e608585610c2f565b6040805173ffffffffffffffffffffffffffffffffffffffff80891682528716602082015290810185905242606082015288907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b506110e0565b60005a6003549091508690610ef79073ffffffffffffffffffffffffffffffffffffffff80841691166000611370565b838015610f0357508282105b15610f9157610f2973ffffffffffffffffffffffffffffffffffffffff82168787610c4f565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050506110e2565b600354610fb89073ffffffffffffffffffffffffffffffffffffffff8381169116876114f2565b60035473ffffffffffffffffffffffffffffffffffffffff16634f91bc2b610fe0858561223f565b8b8b8b8b6040518663ffffffff1660e01b815260040161100394939291906122a2565b600060405180830381600088803b15801561101d57600080fd5b5087f19350505050801561102f575060015b6110b55761105473ffffffffffffffffffffffffffffffffffffffff82168787610c4f565b6040805173ffffffffffffffffffffffffffffffffffffffff808a1682528816602082015290810186905242606082015289907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b6003546110dd9073ffffffffffffffffffffffffffffffffffffffff83811691166000611370565b50505b505b505050505050565b80600003611124576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111795780341015610c4b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156111e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120a9190611f43565b905081811015611255576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6105c5833330856115f1565b60006112c3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118039092919063ffffffff16565b90508051600014806112e45750808060200190518101906112e491906123dd565b6105c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161124c565b80158061141057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156113ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140e9190611f43565b155b61149c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161124c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105c59084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610ca1565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611568573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158c9190611f43565b90506115eb847f095ea7b300000000000000000000000000000000000000000000000000000000856115be86866123fa565b60405173ffffffffffffffffffffffffffffffffffffffff90921660248301526044820152606401610ca1565b50505050565b73ffffffffffffffffffffffffffffffffffffffff841661163e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661168b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117209190611f43565b905061172e8286868661181a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561179e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c29190611f43565b6117cc919061223f565b146110e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60606118128484600085611878565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115eb9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610ca1565b60608247101561190a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161124c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611933919061240d565b60006040518083038185875af1925050503d8060008114611970576040519150601f19603f3d011682016040523d82523d6000602084013e611975565b606091505b509150915061198687838387611991565b979650505050505050565b60608315611a27578251600003611a205773ffffffffffffffffffffffffffffffffffffffff85163b611a20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161124c565b5081611812565b6118128383815115611a3c5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124c9190612429565b73ffffffffffffffffffffffffffffffffffffffff81168114611a9257600080fd5b50565b8035611aa081611a70565b919050565b600080600060608486031215611aba57600080fd5b8335611ac581611a70565b92506020840135611ad581611a70565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611b3857611b38611ae6565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b8557611b85611ae6565b604052919050565b600067ffffffffffffffff821115611ba757611ba7611ae6565b5060051b60200190565b600067ffffffffffffffff821115611bcb57611bcb611ae6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611c0857600080fd5b8135611c1b611c1682611bb1565b611b3e565b818152846020838601011115611c3057600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611a9257600080fd5b8035611aa081611c4d565b60008060008060808587031215611c7c57600080fd5b84359350602085013567ffffffffffffffff80821115611c9b57600080fd5b818701915087601f830112611caf57600080fd5b8135611cbd611c1682611b8d565b8082825260208201915060208360051b86010192508a831115611cdf57600080fd5b602085015b83811015611dca578481351115611cfa57600080fd5b8035860160e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828f03011215611d3057600080fd5b611d38611b15565b611d4460208301611a95565b8152611d5260408301611a95565b6020820152611d6360608301611a95565b6040820152611d7460808301611a95565b606082015260a0820135608082015260c082013587811115611d9557600080fd5b611da48f602083860101611bf7565b60a083015250611db660e08301611c5b565b60c082015284525060209283019201611ce4565b508097505050505050611ddf60408601611a95565b9150611ded60608601611a95565b905092959194509250565b60008060008060008060c08789031215611e1157600080fd5b863561ffff81168114611e2357600080fd5b9550602087013567ffffffffffffffff80821115611e4057600080fd5b611e4c8a838b01611bf7565b96506040890135955060608901359150611e6582611a70565b9093506080880135925060a08801359080821115611e8257600080fd5b50611e8f89828a01611bf7565b9150509295509295509295565b600060208284031215611eae57600080fd5b8135611eb981611a70565b9392505050565b60008060008060008060c08789031215611ed957600080fd5b86359550602087013594506040870135611ef281611a70565b93506060870135611f0281611a70565b9250608087013563ffffffff81168114611f1b57600080fd5b915060a087013567ffffffffffffffff811115611f3757600080fd5b611e8f89828a01611bf7565b600060208284031215611f5557600080fd5b5051919050565b8051611aa081611a70565b60005b83811015611f82578181015183820152602001611f6a565b50506000910152565b600082601f830112611f9c57600080fd5b8151611faa611c1682611bb1565b818152846020838601011115611fbf57600080fd5b611812826020830160208701611f67565b8051611aa081611c4d565b600082601f830112611fec57600080fd5b81516020611ffc611c1683611b8d565b82815260059290921b8401810191818101908684111561201b57600080fd5b8286015b8481101561211757805167ffffffffffffffff808211156120405760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156120795760008081fd5b612081611b15565b61208c888501611f5c565b8152604061209b818601611f5c565b8983015260606120ac818701611f5c565b82840152608091506120bf828701611f5c565b818401525060a0808601518284015260c0915081860151858111156120e45760008081fd5b6120f28f8c838a0101611f8b565b828501525050612103838601611fd0565b90820152865250505091830191830161201f565b509695505050505050565b6000806000806080858703121561213857600080fd5b84519350602085015167ffffffffffffffff81111561215657600080fd5b61216287828801611fdb565b935050604085015161217381611a70565b606086015190925061218481611a70565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080604083850312156121d157600080fd5b825167ffffffffffffffff8111156121e857600080fd5b6121f485828601611fdb565b925050602083015161220581611a70565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561225257612252612210565b92915050565b60008151808452612270816020860160208601611f67565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b8381101561238d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e08986018190529061236182870182612258565b91505060c08083015192506123798187018415159052565b5095870195935050908501906001016122d0565b505073ffffffffffffffffffffffffffffffffffffffff8a16604089015295506123b8945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b6000602082840312156123ef57600080fd5b8151611eb981611c4d565b8082018082111561225257612252612210565b6000825161241f818460208701611f67565b9190910192915050565b602081526000611eb9602083018461225856fea26469706673582212200ce059752644bc5c3d14a0c2381b0a7ee8d929683da4ad49e29db6e5b7d5390464736f6c63430008110033";
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
        readonly name: "pullToken";
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
