import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a4638038062002a46833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161296e620000d860003960006106640152600081816106390152818161077801526107a3015261296e6000f3fe6080604052600436106100295760003560e01c80634eefe3a51461002e578063ba66bd9a14610043575b600080fd5b61004161003c3660046123b2565b610056565b005b61004161005136600461245e565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124dc565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a60008461027585856124dc565b610916565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031434476124dc565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161094c565b61048388886105f4565b5047915050818111156104a0576104a060008461027585856124dc565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f76001856124dc565b818110610506576105066124ef565b9050602002810190610518919061251e565b61052990608081019060600161255c565b9050600061053682610ac2565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d34826124dc565b90505b600061056c8888610b7b565b90506105788888610c87565b6105858a89898985610cf4565b60008261059185610ac2565b61059b91906124dc565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff1661076e5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692636755efd79290917f00000000000000000000000000000000000000000000000000000000000000009083906106936020890189612577565b6106a360408a0160208b016125a1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815273ffffffffffffffffffffffffffffffffffffffff96871660048201529590941660248601526044850192909252606484015267ffffffffffffffff16608483015263ffffffff1660a482015261010060c48201526000610104820181905260e4820152610124016000604051808303818588803b15801561075057600080fd5b505af1158015610764573d6000803e3d6000fd5b50505050506108db565b6107a182608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516110a6565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636755efd78360a0015184608001518560c001518660e001518660000160208101906108049190612577565b6108146040890160208a016125a1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff96871660048201529590941660248601526044850192909252606484015267ffffffffffffffff16608483015263ffffffff1660a482015261010060c48201526000610104820181905260e482015261012401600060405180830381600087803b1580156108c257600080fd5b505af11580156108d6573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161090a9190612635565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109425761093d8383836111e9565b505050565b61093d828261136b565b80600003610986576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109df57803410156109db576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a709190612748565b905081811015610ab6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b61093d83333085611495565b600073ffffffffffffffffffffffffffffffffffffffff821615610b73576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6e9190612748565b610b75565b475b92915050565b60608160008167ffffffffffffffff811115610b9957610b9961212c565b604051908082528060200260200182016040528015610bc2578160200160208202803683370190505b5090506000805b83811015610c7c57868682818110610be357610be36124ef565b9050602002810190610bf5919061251e565b610c0690608081019060600161255c565b9150610c1182610ac2565b838281518110610c2357610c236124ef565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c745734838281518110610c5c57610c5c6124ef565b60200260200101818151610c7091906124dc565b9052505b600101610bc9565b509095945050505050565b60005b8181101561093d5736838383818110610ca557610ca56124ef565b9050602002810190610cb7919061251e565b9050610cc960e0820160c08301612761565b15610ceb57610ceb610ce1606083016040840161255c565b826080013561094c565b50600101610c8a565b838383838260018114610fc15760008585610d106001856124dc565b818110610d1f57610d1f6124ef565b9050602002810190610d31919061251e565b610d4290608081019060600161255c565b9050600089815b81811015610eed57368d8d83818110610d6457610d646124ef565b9050602002810190610d76919061251e565b9050610da5610d8b606083016040840161255c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e085750610e08610dbe604083016020840161255c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e1f5750610e1f610dbe602083018361255c565b8015610ea45750610ea4610e3660a083018361277e565b610e45916004916000916127ea565b610e4e91612814565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610eda576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ee48f826116af565b50600101610d49565b505060005b610efd6001856124dc565b811015610fb9576000888883818110610f1857610f186124ef565b9050602002810190610f2a919061251e565b610f3b90608081019060600161255c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fb057858281518110610f8257610f826124ef565b6020026020010151610f9382610ac2565b610f9d91906124dc565b92508215610fb057610fb0818885610916565b50600101610ef2565b50505061109a565b8760005b8181101561109757368b8b83818110610fe057610fe06124ef565b9050602002810190610ff2919061251e565b9050611007610d8b606083016040840161255c565b806110205750611020610dbe604083016020840161255c565b80156110375750611037610dbe602083018361255c565b801561104e575061104e610e3660a083018361277e565b611084576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61108e8d826116af565b50600101610fc5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110c657505050565b73ffffffffffffffffffffffffffffffffffffffff8216611113576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111ac9190612748565b101561093d576111be838360006119c5565b61093d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119c5565b73ffffffffffffffffffffffffffffffffffffffff8316611236576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611283576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156112f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113149190612748565b90508082111561135a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b611365848484611bc5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113b8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113fb576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105dd565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611455576040519150601f19603f3d011682016040523d82523d6000602084013e61145a565b606091505b505090508061093d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166114e2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661152f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c49190612748565b90506115d282868686611c1b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116669190612748565b61167091906124dc565b146116a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116c56116bf602083018361255c565b3b151590565b6116fb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361173b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611750610d8b606085016040860161255c565b61175b576000611761565b82608001355b9050600061177d611778606086016040870161255c565b610ac2565b90506000611794611778608087016060880161255c565b9050826000036117cb576117cb6117b1606087016040880161255c565b6117c1604088016020890161255c565b87608001356110a6565b8460800135821015611816576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b600080611826602088018861255c565b73ffffffffffffffffffffffffffffffffffffffff168561184a60a08a018a61277e565b60405161185892919061285c565b60006040518083038185875af1925050503d8060008114611895576040519150601f19603f3d011682016040523d82523d6000602084013e61189a565b606091505b5091509150816118e55760006118af82611c79565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061286c565b60006118fa61177860808a0160608b0161255c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961192b60208b018b61255c565b61193b60608c0160408d0161255c565b61194b60808d0160608e0161255c565b8c6080013589871161195d5786611967565b6119678a886124dc565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a6557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a639190612748565b155b611af1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105dd565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261093d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cf7565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261093d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b43565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113659085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b43565b6060604482511015611cbe57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611cda6004808551611cd291906124dc565b859190611e03565b905080806020019051810190611cf0919061287f565b9392505050565b6000611d59826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f1d9092919063ffffffff16565b80519091501561093d5780806020019051810190611d7791906128f6565b61093d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105dd565b606081611e1181601f612913565b1015611e49576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e538284612913565b84511015611e8d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611eac5760405191506000825260208201604052611f14565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ee5578051835260209283019201611ecd565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611f2c8484600085611f34565b949350505050565b606082471015611fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105dd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fef9190612926565b60006040518083038185875af1925050503d806000811461202c576040519150601f19603f3d011682016040523d82523d6000602084013e612031565b606091505b50915091506120428783838761204d565b979650505050505050565b606083156120e35782516000036120dc5773ffffffffffffffffffffffffffffffffffffffff85163b6120dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b5081611f2c565b611f2c83838151156120f85781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061286c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561217f5761217f61212c565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121cc576121cc61212c565b604052919050565b600067ffffffffffffffff8211156121ee576121ee61212c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261222b57600080fd5b813561223e612239826121d4565b612185565b81815284602083860101111561225357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461229457600080fd5b919050565b80151581146122a757600080fd5b50565b803561229481612299565b600061014082840312156122c857600080fd5b6122d061215b565b905081358152602082013567ffffffffffffffff808211156122f157600080fd5b6122fd8583860161221a565b6020840152604084013591508082111561231657600080fd5b506123238482850161221a565b60408301525061233560608301612270565b606082015261234660808301612270565b608082015261235760a08301612270565b60a082015260c082013560c082015260e082013560e082015261010061237e8184016122aa565b908201526101206123908382016122aa565b9082015292915050565b6000604082840312156123ac57600080fd5b50919050565b600080600080608085870312156123c857600080fd5b843567ffffffffffffffff808211156123e057600080fd5b6123ec888389016122b5565b9550602087013591508082111561240257600080fd5b818701915087601f83011261241657600080fd5b81358181111561242557600080fd5b8860208260051b850101111561243a57600080fd5b602083019550809450505050612453866040870161239a565b905092959194509250565b6000806060838503121561247157600080fd5b823567ffffffffffffffff81111561248857600080fd5b612494858286016122b5565b9250506124a4846020850161239a565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b7557610b756124ad565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261255257600080fd5b9190910192915050565b60006020828403121561256e57600080fd5b611cf082612270565b60006020828403121561258957600080fd5b813567ffffffffffffffff81168114611cf057600080fd5b6000602082840312156125b357600080fd5b813563ffffffff81168114611cf057600080fd5b60005b838110156125e25781810151838201526020016125ca565b50506000910152565b600081518084526126038160208601602086016125c7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261265e6101608501836125eb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261269983826125eb565b92505060608501516126c3608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127368187018315159052565b90950151151593019290925250919050565b60006020828403121561275a57600080fd5b5051919050565b60006020828403121561277357600080fd5b8135611cf081612299565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127b357600080fd5b83018035915067ffffffffffffffff8211156127ce57600080fd5b6020019150368190038213156127e357600080fd5b9250929050565b600080858511156127fa57600080fd5b8386111561280757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128545780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611cf060208301846125eb565b60006020828403121561289157600080fd5b815167ffffffffffffffff8111156128a857600080fd5b8201601f810184136128b957600080fd5b80516128c7612239826121d4565b8181528560208385010111156128dc57600080fd5b6128ed8260208301602086016125c7565b95945050505050565b60006020828403121561290857600080fd5b8151611cf081612299565b80820180821115610b7557610b756124ad565b600082516125528184602087016125c756fea2646970667358221220c4ee7c841abecdb273484d6638e602ba8d527ab6b83b75ce584eb2c5961b9a0964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAcrossSpokePool";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_wrappedNative";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
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
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAcross";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
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
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
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
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAcross";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
