import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetOptimized, HopFacetOptimizedInterface } from "../HopFacetOptimized";
declare type HopFacetOptimizedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacetOptimized__factory extends ContractFactory {
    constructor(...args: HopFacetOptimizedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacetOptimized>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacetOptimized;
    connect(signer: Signer): HopFacetOptimized__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506127c9806100206000396000f3fe6080604052600436106100965760003560e01c806342afe79a116100695780638d03f4561161004e5780638d03f45614610129578063ca360ae01461013c578063d40e64cc1461014f57600080fd5b806342afe79a1461010357806355c99cd81461011657600080fd5b806303add8c31461009b5780630680ded4146100b0578063082bc047146100d05780630b4cb5d8146100e3575b600080fd5b6100ae6100a9366004611e47565b610162565b005b3480156100bc57600080fd5b506100ae6100cb366004611eea565b6102bf565b6100ae6100de366004611e47565b610362565b3480156100ef57600080fd5b506100ae6100fe366004611e47565b6103c7565b6100ae61011136600461209f565b610508565b6100ae610124366004611e47565b610672565b6100ae61013736600461209f565b610749565b6100ae61014a36600461209f565b6107d8565b6100ae61015d36600461209f565b6108a9565b61017260c0820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f56101a061010084013560c0860135612237565b60e08501356101b560c0870160a088016121e4565b8660c00135866060013587608001358860c00160208101906101d791906121e4565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b391906122f7565b60405180910390a15050565b6102c76109d6565b60005b8381101561035b576103498383838181106102e7576102e761244a565b90506020020160208101906102fc91906121e4565b86868481811061030e5761030e61244a565b905060200201602081019061032391906121e4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a4b565b8061035381612479565b9150506102ca565b5050505050565b61038161037560a08401608085016121e4565b33308560c00135610a7c565b61039160c0820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101b560c0870160a088016121e4565b6103da61037560a08401608085016121e4565b6103ea60c0820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561041a60c0860160a087016121e4565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e482015261010401600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b391906122f7565b61052384600001518560c00151858533866101000135610b3e565b60c08086019190915261053b90820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c001602081019061058891906121e4565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561061c57600080fd5b505af1158015610630573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612515565b60405180910390a150505050565b61068260c0820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106b79060a088016121e4565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e482015261010401610252565b61076484600001518560c00151858533866101000135610b3e565b60c08086019190915261077c90820160a083016121e4565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c001516107ac9190612237565b8660e001518760a001518860c00151866060013587608001358860c001602081019061058891906121e4565b6107ed84600001518560c00151858533610cde565b60c08086019190915261080590820160a083016121e4565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b2919061010401610603565b6108be84600001518560c00151858533610cde565b60c0808601919091526108d690820160a083016121e4565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b29061010401600060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516106649190612515565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a49576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a778383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e21565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ac9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b16576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3873ffffffffffffffffffffffffffffffffffffffff8516848484610f4a565b50505050565b600083808203610b7a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610b89600185612627565b818110610b9857610b9861244a565b9050602002810190610baa919061263a565b610bbb9060808101906060016121e4565b90506000610bc882610fa7565b905073ffffffffffffffffffffffffffffffffffffffff8216610bf257610bef3482612627565b90505b6000610bfe8989610ff2565b9050610c0a89896110fe565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610c45818b8b8561116b565b600083610c5186610fa7565b610c5b9190612627565b905073ffffffffffffffffffffffffffffffffffffffff8516610c8557610c828882612627565b90505b8b811015610cce576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b600082808203610d1a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610d29600185612627565b818110610d3857610d3861244a565b9050602002810190610d4a919061263a565b610d5b9060808101906060016121e4565b90506000610d6882610fa7565b905073ffffffffffffffffffffffffffffffffffffffff8216610d9257610d8f3482612627565b90505b6000610d9e8888610ff2565b9050610daa88886110fe565b610db78a89898985611561565b600082610dc385610fa7565b610dcd9190612627565b905089811015610e13576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610cc5565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610b385773ffffffffffffffffffffffffffffffffffffffff8316610e8a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f239190612678565b1015610b3857610b3873ffffffffffffffffffffffffffffffffffffffff8516848361182a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610f9957637939f4246000526004601cfd5b600060605260405250505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610fea57610fe573ffffffffffffffffffffffffffffffffffffffff8316306118be565b610fec565b475b92915050565b60608160008167ffffffffffffffff81111561101057611010611f56565b604051908082528060200260200182016040528015611039578160200160208202803683370190505b5090506000805b838110156110f35786868281811061105a5761105a61244a565b905060200281019061106c919061263a565b61107d9060808101906060016121e4565b915061108882610fa7565b83828151811061109a5761109a61244a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110eb57348382815181106110d3576110d361244a565b602002602001018181516110e79190612627565b9052505b600101611040565b509095945050505050565b60005b81811015610a77573683838381811061111c5761111c61244a565b905060200281019061112e919061263a565b905061114060e0820160c08301612691565b156111625761116261115860608301604084016121e4565b82608001356118f3565b50600101611101565b60208401516040850151849184918490836001811461147a5760008686611193600185612627565b8181106111a2576111a261244a565b90506020028101906111b4919061263a565b6111c59060808101906060016121e4565b9050600089815b8181101561137257368d8d838181106111e7576111e761244a565b90506020028101906111f9919061263a565b905061122861120e60608301604084016121e4565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061128b575061128b61124160408301602084016121e4565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112a257506112a261124160208301836121e4565b801561132757506113276112b960a08301836126ac565b6112c891600491600091612711565b6112d19161273b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61135d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e5161136990826119a8565b506001016111cc565b505060005b611382600185612627565b81101561147257600089898381811061139d5761139d61244a565b90506020028101906113af919061263a565b6113c09060808101906060016121e4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611469578682815181106114075761140761244a565b602002602001015161141882610fa7565b6114229190612627565b9250600073ffffffffffffffffffffffffffffffffffffffff82161561144957600061144b565b865b9050831561146757611467828a6114628488612627565b611c22565b505b50600101611377565b505050611555565b8760005b8181101561155257368b8b838181106114995761149961244a565b90506020028101906114ab919061263a565b90506114c061120e60608301604084016121e4565b806114d957506114d961124160408301602084016121e4565b80156114f057506114f061124160208301836121e4565b801561150757506115076112b960a08301836126ac565b61153d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161154990826119a8565b5060010161147e565b50505b50505050505050505050565b838383838260018114611754576000858561157d600185612627565b81811061158c5761158c61244a565b905060200281019061159e919061263a565b6115af9060808101906060016121e4565b9050600089815b8181101561168857368d8d838181106115d1576115d161244a565b90506020028101906115e3919061263a565b90506115f861120e60608301604084016121e4565b80611611575061161161124160408301602084016121e4565b8015611628575061162861124160208301836121e4565b801561163f575061163f6112b960a08301836126ac565b611675576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61167f8f826119a8565b506001016115b6565b505060005b611698600185612627565b8110156114725760008888838181106116b3576116b361244a565b90506020028101906116c5919061263a565b6116d69060808101906060016121e4565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461174b5785828151811061171d5761171d61244a565b602002602001015161172e82610fa7565b6117389190612627565b9250821561174b5761174b818885611c22565b5060010161168d565b8760005b8181101561155257368b8b838181106117735761177361244a565b9050602002810190611785919061263a565b905061179a61120e60608301604084016121e4565b806117b357506117b361124160408301602084016121e4565b80156117ca57506117ca61124160208301836121e4565b80156117e157506117e16112b960a08301836126ac565b611817576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118218d826119a8565b50600101611758565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166118b45760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166118b457633e3f8f736000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b8060000361192d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166119865780341015611982576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61198273ffffffffffffffffffffffffffffffffffffffff8316333084610f4a565b6119bd6119b860208301836121e4565b611c52565b6119f3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611a33576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a4861120e60608501604086016121e4565b611a53576000611a59565b82608001355b90506000611a75611a7060808601606087016121e4565b610fa7565b905081600003611aac57611aac611a9260608601604087016121e4565b611aa260408701602088016121e4565b8660800135610a4b565b600080611abc60208701876121e4565b73ffffffffffffffffffffffffffffffffffffffff1684611ae060a08901896126ac565b604051611aee929190612783565b60006040518083038185875af1925050503d8060008114611b2b576040519150601f19603f3d011682016040523d82523d6000602084013e611b30565b606091505b509150915081611b4357611b4381611ce8565b6000611b58611a706080890160608a016121e4565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611b8960208a018a6121e4565b611b9960608b0160408c016121e4565b611ba960808c0160608d016121e4565b8b60800135898711611bbb5786611bc5565b611bc58a88612627565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611c4757610a778282611cf2565b610a77838383611d5f565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611cdf57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8216611d3f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61198273ffffffffffffffffffffffffffffffffffffffff831682611dcd565b73ffffffffffffffffffffffffffffffffffffffff8216611dac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7773ffffffffffffffffffffffffffffffffffffffff84168383611de9565b60003860003884865af16119825763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166118b4576390b8ec186000526004601cfd5b60006101208284031215611e4157600080fd5b50919050565b600080610140808486031215611e5c57600080fd5b833567ffffffffffffffff811115611e7357600080fd5b8401808603821315611e8457600080fd5b9250611e9590508460208501611e2e565b90509250929050565b60008083601f840112611eb057600080fd5b50813567ffffffffffffffff811115611ec857600080fd5b6020830191508360208260051b8501011115611ee357600080fd5b9250929050565b60008060008060408587031215611f0057600080fd5b843567ffffffffffffffff80821115611f1857600080fd5b611f2488838901611e9e565b90965094506020870135915080821115611f3d57600080fd5b50611f4a87828801611e9e565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fa957611fa9611f56565b60405290565b600082601f830112611fc057600080fd5b813567ffffffffffffffff80821115611fdb57611fdb611f56565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561202157612021611f56565b8160405283815286602085880101111561203a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461207c57600080fd5b50565b803561208a8161205a565b919050565b8035801515811461208a57600080fd5b60008060008061016085870312156120b657600080fd5b843567ffffffffffffffff808211156120ce57600080fd5b9086019061014082890312156120e357600080fd5b6120eb611f85565b8235815260208301358281111561210157600080fd5b61210d8a828601611faf565b60208301525060408301358281111561212557600080fd5b6121318a828601611faf565b6040830152506121436060840161207f565b60608201526121546080840161207f565b608082015261216560a0840161207f565b60a082015260c083013560c082015260e083013560e082015261010061218c81850161208f565b9082015261012061219e84820161208f565b90820152955060208701359150808211156121b857600080fd5b506121c587828801611e9e565b90945092506121d990508660408701611e2e565b905092959194509250565b6000602082840312156121f657600080fd5b81356122018161205a565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610fec57610fec612208565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261227f57600080fd5b830160208101925035905067ffffffffffffffff81111561229f57600080fd5b803603821315611ee357600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152813560208201526000612311602084018461224a565b610140806040860152612329610160860183856122ae565b9250612338604087018761224a565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086850301606087015261236f8484836122ae565b93505061237e6060870161207f565b73ffffffffffffffffffffffffffffffffffffffff8116608087015291506123a86080870161207f565b73ffffffffffffffffffffffffffffffffffffffff811660a087015291506123d260a0870161207f565b73ffffffffffffffffffffffffffffffffffffffff811660c0870152915060c086013560e0860152610100915060e08601358286015261241382870161208f565b91506101206124258187018415159052565b61243081880161208f565b9250506124408186018315159052565b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124aa576124aa612208565b5060010190565b6000815180845260005b818110156124d7576020818501810151868301820152016124bb565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201526000602083015161014080604085015261253e6101608501836124b1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261257983826124b1565b92505060608501516125a3608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126168187018315159052565b860151801515838701529050612440565b81810381811115610fec57610fec612208565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261266e57600080fd5b9190910192915050565b60006020828403121561268a57600080fd5b5051919050565b6000602082840312156126a357600080fd5b6122018261208f565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126e157600080fd5b83018035915067ffffffffffffffff8211156126fc57600080fd5b602001915036819003821315611ee357600080fd5b6000808585111561272157600080fd5b8386111561272e57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561277b5780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea2646970667358221220fc667c495839096f43d7c9da1b5f813495f1e8ccc04106f5f0f2d15b627eb51364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setApprovalForBridges";
        readonly inputs: readonly [{
            readonly name: "bridges";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetOptimizedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacetOptimized;
}
export {};
