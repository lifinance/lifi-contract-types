import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
declare type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002b4f38038062002b4f833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612a85620000ca60003960006105f80152600061068c0152612a856000f3fe6080604052600436106100295760003560e01c8063349700521461002e578063ca56137e14610043575b600080fd5b61004161003c36600461236d565b610056565b005b61004161005136600461242c565b610249565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124bf565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101448160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561017b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101b9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101f6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61020b89600001518a60c001518a8a3361046d565b60c08a015261021a89876105b5565b504790508181111561023b5761023b60008461023685856124bf565b6108ce565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102c4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102d534476124bf565b9050846102fa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610331576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361036f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103ac576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103ea576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610428576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a88608001518960c00151610904565b61044488886105b5565b5047915050818111156104615761046160008461023685856124bf565b50506000909155505050565b6000828082036104a9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104b86001856124bf565b8181106104c7576104c76124d2565b90506020028101906104d99190612501565b6104ea90608081019060600161253f565b905060006104f782610a7a565b905073ffffffffffffffffffffffffffffffffffffffff82166105215761051e34826124bf565b90505b600061052d8888610b33565b90506105398888610c3f565b6105468a89898985610cac565b60008261055285610a7a565b61055c91906124bf565b9050898110156105a7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60006105d9836080015173ffffffffffffffffffffffffffffffffffffffff161590565b9050600081156105ee575060c0830151610621565b61062184608001517f00000000000000000000000000000000000000000000000000000000000000008660c0015161105e565b6040805160018082528183019092526000916020808301908036833701905050905084608001518160008151811061065b5761065b6124d2565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526040805161012081019091527f00000000000000000000000000000000000000000000000000000000000000009091169063a11b1198908490806106c2898061255a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060209081019061070b908a018a61255a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252506020810186905260400161075c60808a0160608b0161253f565b73ffffffffffffffffffffffffffffffffffffffff16815260200161078760a08a0160808b0161253f565b73ffffffffffffffffffffffffffffffffffffffff1681526020018960c00151815260200187151581526020018860a00160208101906107c7919061253f565b73ffffffffffffffffffffffffffffffffffffffff1681526020016107ef60c08a018a61255a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261085e9190600401612685565b6000604051808303818588803b15801561087757600080fd5b505af115801561088b573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1856040516108bf91906127b8565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156108fa576108f58383836111a1565b505050565b6108f58282611323565b8060000361093e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109975780341015610993576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2891906128cb565b905081811015610a6e576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b6108f58333308561144d565b600073ffffffffffffffffffffffffffffffffffffffff821615610b2b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2691906128cb565b610b2d565b475b92915050565b60608160008167ffffffffffffffff811115610b5157610b516120e7565b604051908082528060200260200182016040528015610b7a578160200160208202803683370190505b5090506000805b83811015610c3457868682818110610b9b57610b9b6124d2565b9050602002810190610bad9190612501565b610bbe90608081019060600161253f565b9150610bc982610a7a565b838281518110610bdb57610bdb6124d2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c2c5734838281518110610c1457610c146124d2565b60200260200101818151610c2891906124bf565b9052505b600101610b81565b509095945050505050565b60005b818110156108f55736838383818110610c5d57610c5d6124d2565b9050602002810190610c6f9190612501565b9050610c8160e0820160c083016128e4565b15610ca357610ca3610c99606083016040840161253f565b8260800135610904565b50600101610c42565b838383838260018114610f795760008585610cc86001856124bf565b818110610cd757610cd76124d2565b9050602002810190610ce99190612501565b610cfa90608081019060600161253f565b9050600089815b81811015610ea557368d8d83818110610d1c57610d1c6124d2565b9050602002810190610d2e9190612501565b9050610d5d610d43606083016040840161253f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dc05750610dc0610d76604083016020840161253f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610dd75750610dd7610d76602083018361253f565b8015610e5c5750610e5c610dee60a083018361255a565b610dfd91600491600091612901565b610e069161292b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e92576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e9c8f82611667565b50600101610d01565b505060005b610eb56001856124bf565b811015610f71576000888883818110610ed057610ed06124d2565b9050602002810190610ee29190612501565b610ef390608081019060600161253f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f6857858281518110610f3a57610f3a6124d2565b6020026020010151610f4b82610a7a565b610f5591906124bf565b92508215610f6857610f688188856108ce565b50600101610eaa565b505050611052565b8760005b8181101561104f57368b8b83818110610f9857610f986124d2565b9050602002810190610faa9190612501565b9050610fbf610d43606083016040840161253f565b80610fd85750610fd8610d76604083016020840161253f565b8015610fef5750610fef610d76602083018361253f565b80156110065750611006610dee60a083018361255a565b61103c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110468d82611667565b50600101610f7d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661107e57505050565b73ffffffffffffffffffffffffffffffffffffffff82166110cb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611140573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116491906128cb565b10156108f5576111768383600061197d565b6108f583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61197d565b73ffffffffffffffffffffffffffffffffffffffff83166111ee576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661123b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc91906128cb565b905080821115611312576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161059e565b61131d848484611b7d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611370576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113b3576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161059e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461140d576040519150601f19603f3d011682016040523d82523d6000602084013e611412565b606091505b50509050806108f5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661149a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114e7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157c91906128cb565b905061158a82868686611bd3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156115fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161e91906128cb565b61162891906124bf565b1461165f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61167d611677602083018361253f565b3b151590565b6116b3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036116f3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611708610d43606085016040860161253f565b611713576000611719565b82608001355b90506000611735611730606086016040870161253f565b610a7a565b9050600061174c611730608087016060880161253f565b90508260000361178357611783611769606087016040880161253f565b611779604088016020890161253f565b876080013561105e565b84608001358210156117ce576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161059e565b6000806117de602088018861253f565b73ffffffffffffffffffffffffffffffffffffffff168561180260a08a018a61255a565b604051611810929190612973565b60006040518083038185875af1925050503d806000811461184d576040519150601f19603f3d011682016040523d82523d6000602084013e611852565b606091505b50915091508161189d57600061186782611c31565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e9190612983565b60006118b261173060808a0160608b0161253f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118e360208b018b61253f565b6118f360608c0160408d0161253f565b61190360808d0160608e0161253f565b8c60800135898711611915578661191f565b61191f8a886124bf565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a1d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1b91906128cb565b155b611aa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161059e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108f59084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611caf565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108f59084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611afb565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261131d9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611afb565b6060604482511015611c7657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c926004808551611c8a91906124bf565b859190611dbe565b905080806020019051810190611ca89190612996565b9392505050565b6000611d11826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ed89092919063ffffffff16565b9050805160001480611d32575080806020019051810190611d329190612a0d565b6108f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161059e565b606081611dcc81601f612a2a565b1015611e04576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e0e8284612a2a565b84511015611e48576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e675760405191506000825260208201604052611ecf565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ea0578051835260209283019201611e88565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611ee78484600085611eef565b949350505050565b606082471015611f81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161059e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611faa9190612a3d565b60006040518083038185875af1925050503d8060008114611fe7576040519150601f19603f3d011682016040523d82523d6000602084013e611fec565b606091505b5091509150611ffd87838387612008565b979650505050505050565b6060831561209e5782516000036120975773ffffffffffffffffffffffffffffffffffffffff85163b612097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161059e565b5081611ee7565b611ee783838151156120b35781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059e9190612983565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561213a5761213a6120e7565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612187576121876120e7565b604052919050565b600067ffffffffffffffff8211156121a9576121a96120e7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121e657600080fd5b81356121f96121f48261218f565b612140565b81815284602083860101111561220e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461224f57600080fd5b919050565b801515811461226257600080fd5b50565b803561224f81612254565b6000610140828403121561228357600080fd5b61228b612116565b905081358152602082013567ffffffffffffffff808211156122ac57600080fd5b6122b8858386016121d5565b602084015260408401359150808211156122d157600080fd5b506122de848285016121d5565b6040830152506122f06060830161222b565b60608201526123016080830161222b565b608082015261231260a0830161222b565b60a082015260c082013560c082015260e082013560e0820152610100612339818401612265565b9082015261012061234b838201612265565b9082015292915050565b600060e0828403121561236757600080fd5b50919050565b6000806000806060858703121561238357600080fd5b843567ffffffffffffffff8082111561239b57600080fd5b6123a788838901612270565b955060208701359150808211156123bd57600080fd5b818701915087601f8301126123d157600080fd5b8135818111156123e057600080fd5b8860208260051b85010111156123f557600080fd5b60208301955080945050604087013591508082111561241357600080fd5b5061242087828801612355565b91505092959194509250565b6000806040838503121561243f57600080fd5b823567ffffffffffffffff8082111561245757600080fd5b61246386838701612270565b9350602085013591508082111561247957600080fd5b5061248685828601612355565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b2d57610b2d612490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261253557600080fd5b9190910192915050565b60006020828403121561255157600080fd5b611ca88261222b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261258f57600080fd5b83018035915067ffffffffffffffff8211156125aa57600080fd5b6020019150368190038213156125bf57600080fd5b9250929050565b60005b838110156125e15781810151838201526020016125c9565b50506000910152565b600081518084526126028160208601602086016125c6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b8381101561267a57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101612648565b509495945050505050565b60208152600082516101208060208501526126a46101408501836125ea565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808685030160408701526126e084836125ea565b935060408701519150808685030160608701526126fd8483612634565b935060608701519150612728608087018373ffffffffffffffffffffffffffffffffffffffff169052565b608087015173ffffffffffffffffffffffffffffffffffffffff811660a0880152915060a087015160c087015260c0870151915061276a60e087018315159052565b60e087015191506101006127958188018473ffffffffffffffffffffffffffffffffffffffff169052565b8701518685039091018387015290506127ae83826125ea565b9695505050505050565b6020815281516020820152600060208301516101408060408501526127e16101608501836125ea565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261281c83826125ea565b9250506060850151612846608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128b98187018315159052565b90950151151593019290925250919050565b6000602082840312156128dd57600080fd5b5051919050565b6000602082840312156128f657600080fd5b8135611ca881612254565b6000808585111561291157600080fd5b8386111561291e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561296b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ca860208301846125ea565b6000602082840312156129a857600080fd5b815167ffffffffffffffff8111156129bf57600080fd5b8201601f810184136129d057600080fd5b80516129de6121f48261218f565b8181528560208385010111156129f357600080fd5b612a048260208301602086016125c6565b95945050505050565b600060208284031215612a1f57600080fd5b8151611ca881612254565b80820180821115610b2d57610b2d612490565b600082516125358184602087016125c656fea264697066735822122064e7b191bb360191a726cbe61e937af73f9ad98441daf2215c7028fb087156ea64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
        }, {
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "intermediateToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
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
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
