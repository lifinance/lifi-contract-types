import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620025a5380380620025a5833981016040819052620000349162000080565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a250620000b2565b6000602082840312156200009357600080fd5b81516001600160a01b0381168114620000ab57600080fd5b9392505050565b6124e380620000c26000396000f3fe6080604052600436106100745760003560e01c80637f555b031161004e5780637f555b031461011b578063a83cbaa31461016d578063bc197c8114610180578063f23a6e61146101c557600080fd5b806301ffc9a714610080578063150b7a02146100b55780634f91bc2b1461010657600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b366004611d6b565b61020a565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d0366004611eec565b6102a3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ac565b610119610114366004611fa4565b6102cd565b005b34801561012757600080fd5b506000546101489073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b61011961017b366004612018565b61036e565b34801561018c57600080fd5b506100d561019b366004612109565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156101d157600080fd5b506100d56101e03660046121b7565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061029d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610348576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610363868686868660006001610409565b600090555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103fd8787878787876000610409565b60009055505050505050565b60008080888861041a60018261224f565b81811061042957610429612262565b905060200281019061043b9190612291565b61044c9060808101906060016122cf565b905073ffffffffffffffffffffffffffffffffffffffff81161561047a57610473816106e2565b9150610491565b34610484826106e2565b61048e919061224f565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610604576104b6876106e2565b92508315610567576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055591906122ec565b9050610561888261079a565b5061061b565b6000546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b5050505061061b565b3461060e886106e2565b610618919061224f565b92505b6106278a8a8a8961091a565b6000610632886106e2565b90508381111561065057610650888861064b878561224f565b610c2c565b600061065b836106e2565b90508381111561067457610674838961064b878561224f565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610793576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e91906122ec565b61029d565b4792915050565b806000036107d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661082d5780341015610829576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be91906122ec565b905081811015610909576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61091583333085610c5d565b505050565b8282828160018114610b415760006109328585610e77565b90506000858561094360018661224f565b81811061095257610952612262565b90506020028101906109649190612291565b6109759060808101906060016122cf565b9050600088815b81811015610a565760005473ffffffffffffffffffffffffffffffffffffffff168c8c838181106109af576109af612262565b90506020028101906109c19190612291565b6109cf9060208101906122cf565b73ffffffffffffffffffffffffffffffffffffffff1603610a1c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610a2f57610a2f612262565b9050602002810190610a419190612291565b9050610a4d8e82610f83565b5060010161097c565b505060005b610a6660018661224f565b811015610b38576000888883818110610a8157610a81612262565b9050602002810190610a939190612291565b610aa49060808101906060016122cf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2f57610ae2816106e2565b9250848281518110610af657610af6612262565b6020026020010151831115610b2f57610b2f8188878581518110610b1c57610b1c612262565b60200260200101518661064b919061224f565b50600101610a5b565b50505050610c22565b8560005b81811015610c1f5760005473ffffffffffffffffffffffffffffffffffffffff16898983818110610b7857610b78612262565b9050602002810190610b8a9190612291565b610b989060208101906122cf565b73ffffffffffffffffffffffffffffffffffffffff1603610be5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610bf857610bf8612262565b9050602002810190610c0a9190612291565b9050610c168b82610f83565b50600101610b45565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c53576109158383836112b3565b6109158282611435565b73ffffffffffffffffffffffffffffffffffffffff8416610caa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8c91906122ec565b9050610d9a8286868661155f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2e91906122ec565b610e38919061224f565b14610e6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff811115610e9557610e95611dd2565b604051908082528060200260200182016040528015610ebe578160200160208202803683370190505b5090506000805b83811015610f7857868682818110610edf57610edf612262565b9050602002810190610ef19190612291565b610f029060808101906060016122cf565b9150610f0d826106e2565b838281518110610f1f57610f1f612262565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f705734838281518110610f5857610f58612262565b60200260200101818151610f6c919061224f565b9052505b600101610ec5565b509095945050505050565b610f99610f9360208301836122cf565b3b151590565b610fcf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361100f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061103e61102460608501604086016122cf565b73ffffffffffffffffffffffffffffffffffffffff161590565b61104957600061104f565b82608001355b9050600061106b61106660608601604087016122cf565b6106e2565b9050600061108261106660808701606088016122cf565b9050826000036110b9576110b961109f60608701604088016122cf565b6110af60408801602089016122cf565b876080013561163b565b8460800135821015611104576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610900565b60008061111460208801886122cf565b73ffffffffffffffffffffffffffffffffffffffff168561113860a08a018a612305565b60405161114692919061236a565b60006040518083038185875af1925050503d8060008114611183576040519150601f19603f3d011682016040523d82523d6000602084013e611188565b606091505b5091509150816111d357600061119d8261177e565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610900919061239e565b60006111e861106660808a0160608b016122cf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961121960208b018b6122cf565b61122960608c0160408d016122cf565b61123960808d0160608e016122cf565b8c6080013589871161124b5786611255565b6112558a8861224f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611300576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661134d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113de91906122ec565b905080821115611424576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610900565b61142f8484846117fc565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611482576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114c5576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610900565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461151f576040519150601f19603f3d011682016040523d82523d6000602084013e611524565b606091505b5050905080610915576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261142f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611852565b73ffffffffffffffffffffffffffffffffffffffff831661165b57505050565b73ffffffffffffffffffffffffffffffffffffffff82166116a8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561171d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174191906122ec565b1015610915576117538383600061195e565b61091583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61195e565b60606044825110156117c357505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006117df60048085516117d7919061224f565b859190611ae0565b9050808060200190518101906117f591906123ef565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b9565b60006118b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bfa9092919063ffffffff16565b80519091501561091557808060200190518101906118d29190612466565b610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610900565b8015806119fe57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119fc91906122ec565b155b611a8a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610900565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b9565b606081611aee81601f612488565b1015611b26576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b308284612488565b84511015611b6a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b895760405191506000825260208201604052611bf1565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611bc2578051835260209283019201611baa565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606102c58484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c2e919061249b565b60006040518083038185875af1925050503d8060008114611c6b576040519150601f19603f3d011682016040523d82523d6000602084013e611c70565b606091505b5091509150611c8187838387611c8c565b979650505050505050565b60608315611d22578251600003611d1b5773ffffffffffffffffffffffffffffffffffffffff85163b611d1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610900565b50816102c5565b6102c58383815115611d375781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610900919061239e565b600060208284031215611d7d57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146117f557600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611dcf57600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e4857611e48611dd2565b604052919050565b600067ffffffffffffffff821115611e6a57611e6a611dd2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ea757600080fd5b8135611eba611eb582611e50565b611e01565b818152846020838601011115611ecf57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611f0257600080fd5b8435611f0d81611dad565b93506020850135611f1d81611dad565b925060408501359150606085013567ffffffffffffffff811115611f4057600080fd5b611f4c87828801611e96565b91505092959194509250565b60008083601f840112611f6a57600080fd5b50813567ffffffffffffffff811115611f8257600080fd5b6020830191508360208260051b8501011115611f9d57600080fd5b9250929050565b600080600080600060808688031215611fbc57600080fd5b85359450602086013567ffffffffffffffff811115611fda57600080fd5b611fe688828901611f58565b9095509350506040860135611ffa81611dad565b9150606086013561200a81611dad565b809150509295509295909350565b60008060008060008060a0878903121561203157600080fd5b86359550602087013567ffffffffffffffff81111561204f57600080fd5b61205b89828a01611f58565b909650945050604087013561206f81611dad565b9250606087013561207f81611dad565b80925050608087013590509295509295509295565b600082601f8301126120a557600080fd5b8135602067ffffffffffffffff8211156120c1576120c1611dd2565b8160051b6120d0828201611e01565b92835284810182019282810190878511156120ea57600080fd5b83870192505b84831015611c81578235825291830191908301906120f0565b600080600080600060a0868803121561212157600080fd5b853561212c81611dad565b9450602086013561213c81611dad565b9350604086013567ffffffffffffffff8082111561215957600080fd5b61216589838a01612094565b9450606088013591508082111561217b57600080fd5b61218789838a01612094565b9350608088013591508082111561219d57600080fd5b506121aa88828901611e96565b9150509295509295909350565b600080600080600060a086880312156121cf57600080fd5b85356121da81611dad565b945060208601356121ea81611dad565b93506040860135925060608601359150608086013567ffffffffffffffff81111561221457600080fd5b6121aa88828901611e96565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561029d5761029d612220565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122c557600080fd5b9190910192915050565b6000602082840312156122e157600080fd5b81356117f581611dad565b6000602082840312156122fe57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261233a57600080fd5b83018035915067ffffffffffffffff82111561235557600080fd5b602001915036819003821315611f9d57600080fd5b8183823760009101908152919050565b60005b8381101561239557818101518382015260200161237d565b50506000910152565b60208152600082518060208401526123bd81604085016020870161237a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561240157600080fd5b815167ffffffffffffffff81111561241857600080fd5b8201601f8101841361242957600080fd5b8051612437611eb582611e50565b81815285602083850101111561244c57600080fd5b61245d82602083016020860161237a565b95945050505050565b60006020828403121561247857600080fd5b815180151581146117f557600080fd5b8082018082111561029d5761029d612220565b600082516122c581846020870161237a56fea2646970667358221220deba14e6099b1324b47b265c8b22dd6d51d6dfbaa66c73c06fdd303de581013264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_erc20Proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
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
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "ERC20ProxySet";
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
        readonly inputs: readonly [];
        readonly name: "erc20Proxy";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Proxy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }];
        readonly name: "swapAndCompleteBridgeTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly name: "_transferredAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "swapAndExecute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
