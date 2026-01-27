import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetOptimized, HopFacetOptimizedInterface } from "../HopFacetOptimized";
type HopFacetOptimizedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061269a806100206000396000f3fe6080604052600436106100965760003560e01c806342afe79a116100695780638d03f4561161004e5780638d03f45614610129578063ca360ae01461013c578063d40e64cc1461014f57600080fd5b806342afe79a1461010357806355c99cd81461011657600080fd5b806303add8c31461009b5780630680ded4146100b0578063082bc047146100d05780630b4cb5d8146100e3575b600080fd5b6100ae6100a9366004611d18565b610162565b005b3480156100bc57600080fd5b506100ae6100cb366004611dbb565b6102bf565b6100ae6100de366004611d18565b610362565b3480156100ef57600080fd5b506100ae6100fe366004611d18565b6103c7565b6100ae610111366004611f70565b610508565b6100ae610124366004611d18565b610672565b6100ae610137366004611f70565b610749565b6100ae61014a366004611f70565b6107d8565b6100ae61015d366004611f70565b6108a9565b61017260c0820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f56101a061010084013560c0860135612108565b60e08501356101b560c0870160a088016120b5565b8660c00135866060013587608001358860c00160208101906101d791906120b5565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b391906121c8565b60405180910390a15050565b6102c76109d6565b60005b8381101561035b576103498383838181106102e7576102e761231b565b90506020020160208101906102fc91906120b5565b86868481811061030e5761030e61231b565b905060200201602081019061032391906120b5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a4b565b806103538161234a565b9150506102ca565b5050505050565b61038161037560a08401608085016120b5565b33308560c00135610a7c565b61039160c0820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101b560c0870160a088016120b5565b6103da61037560a08401608085016120b5565b6103ea60c0820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561041a60c0860160a087016120b5565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e482015261010401600060405180830381600087803b1580156104c157600080fd5b505af11580156104d5573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102b391906121c8565b61052384600001518560c00151858533866101000135610b3e565b60c08086019190915261053b90820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c001602081019061058891906120b5565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b6000604051808303818588803b15801561061c57600080fd5b505af1158015610630573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161066491906123e6565b60405180910390a150505050565b61068260c0820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106b79060a088016120b5565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e482015261010401610252565b61076484600001518560c00151858533866101000135610b3e565b60c08086019190915261077c90820160a083016120b5565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c001516107ac9190612108565b8660e001518760a001518860c00151866060013587608001358860c001602081019061058891906120b5565b6107ed84600001518560c00151858533610cde565b60c08086019190915261080590820160a083016120b5565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b2919061010401610603565b6108be84600001518560c00151858533610cde565b60c0808601919091526108d690820160a083016120b5565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b29061010401600060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161066491906123e6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a49576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a778383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e21565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ac9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b16576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3873ffffffffffffffffffffffffffffffffffffffff8516848484610f4a565b50505050565b600083808203610b7a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610b896001856124f8565b818110610b9857610b9861231b565b9050602002810190610baa919061250b565b610bbb9060808101906060016120b5565b90506000610bc882610fa7565b905073ffffffffffffffffffffffffffffffffffffffff8216610bf257610bef34826124f8565b90505b6000610bfe8989610ff2565b9050610c0a8989611106565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610c45818b8b85611173565b600083610c5186610fa7565b610c5b91906124f8565b905073ffffffffffffffffffffffffffffffffffffffff8516610c8557610c8288826124f8565b90505b8b811015610cce576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b600082808203610d1a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610d296001856124f8565b818110610d3857610d3861231b565b9050602002810190610d4a919061250b565b610d5b9060808101906060016120b5565b90506000610d6882610fa7565b905073ffffffffffffffffffffffffffffffffffffffff8216610d9257610d8f34826124f8565b90505b6000610d9e8888610ff2565b9050610daa8888611106565b610db78a898989856113cd565b600082610dc385610fa7565b610dcd91906124f8565b905089811015610e13576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610cc5565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610b385773ffffffffffffffffffffffffffffffffffffffff8316610e8a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f239190612549565b1015610b3857610b3873ffffffffffffffffffffffffffffffffffffffff85168483611563565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610f9957637939f4246000526004601cfd5b600060605260405250505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610fea57610fe573ffffffffffffffffffffffffffffffffffffffff8316306115f7565b610fec565b475b92915050565b60608160008167ffffffffffffffff81111561101057611010611e27565b604051908082528060200260200182016040528015611039578160200160208202803683370190505b5090506000805b838110156110fb5786868281811061105a5761105a61231b565b905060200281019061106c919061250b565b61107d9060808101906060016120b5565b915061108882610fa7565b83828151811061109a5761109a61231b565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110eb57348382815181106110d3576110d361231b565b602002602001018181516110e791906124f8565b9052505b6110f48161234a565b9050611040565b509095945050505050565b60005b81811015610a7757368383838181106111245761112461231b565b9050602002810190611136919061250b565b905061114860e0820160c08301612562565b1561116a5761116a61116060608301604084016120b5565b826080013561162c565b50600101611109565b6020840151604085015184918491849083600080805b838110156113b157368c8c838181106111a4576111a461231b565b90506020028101906111b6919061250b565b90506111c560208201826120b5565b93506111d760408201602083016120b5565b925061127c846111ea60a084018461257d565b6111f9916004916000916125e2565b6112029161260c565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061136557506112b061129660608301604084016120b5565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156112e957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611365575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561139c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516113a890826116e1565b50600101611189565b505050506113c2858585858561195e565b505050505050505050565b8383838382600080805b8381101561155157368c8c838181106113f2576113f261231b565b9050602002810190611404919061250b565b905061141360208201826120b5565b935061142560408201602083016120b5565b9250611438846111ea60a084018461257d565b1580611507575061145261129660608301604084016120b5565b15801561148b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611507575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561153e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115488e826116e1565b506001016113d7565b505050506113c284848484600061195e565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115ed5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166115ed57633e3f8f736000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b80600003611666576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116bf57803410156116bb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6116bb73ffffffffffffffffffffffffffffffffffffffff8316333084610f4a565b6116f96116f160208301836120b5565b6017903b1190565b61172f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361176f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061178461129660608501604086016120b5565b61178f576000611795565b82608001355b905060006117b16117ac60808601606087016120b5565b610fa7565b9050816000036117e8576117e86117ce60608601604087016120b5565b6117de60408701602088016120b5565b8660800135610a4b565b6000806117f860208701876120b5565b73ffffffffffffffffffffffffffffffffffffffff168461181c60a089018961257d565b60405161182a929190612654565b60006040518083038185875af1925050503d8060008114611867576040519150601f19603f3d011682016040523d82523d6000602084013e61186c565b606091505b50915091508161187f5761187f81611b89565b60006118946117ac6080890160608a016120b5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118c560208a018a6120b5565b6118d560608b0160408c016120b5565b6118e560808c0160608d016120b5565b8b608001358987116118f75786611901565b6119018a886124f8565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261196e6001826124f8565b81811061197d5761197d61231b565b905060200281019061198f919061250b565b6119a09060808101906060016120b5565b905060008060008060008060005b88811015611b79576119c160018a6124f8565b811080156119d0575088600114155b15611ab1578d8d828181106119e7576119e761231b565b90506020028101906119f9919061250b565b611a0a9060808101906060016120b5565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611ab1578a8181518110611a5157611a5161231b565b6020026020010151611a6287610fa7565b611a6c91906124f8565b965073ffffffffffffffffffffffffffffffffffffffff861615611a91576000611a93565b895b935083871115611ab157611ab1868d611aac878b6124f8565b611b93565b8d8d82818110611ac357611ac361231b565b9050602002810190611ad5919061250b565b611ae69060608101906040016120b5565b9450611af185610fa7565b925073ffffffffffffffffffffffffffffffffffffffff851615611b16576000611b18565b895b91508183118015611b5557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b6957611b69858d611aac85876124f8565b611b728161234a565b90506119ae565b5050505050505050505050505050565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8316611bb857610a778282611bc3565b610a77838383611c30565b73ffffffffffffffffffffffffffffffffffffffff8216611c10576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116bb73ffffffffffffffffffffffffffffffffffffffff831682611c9e565b73ffffffffffffffffffffffffffffffffffffffff8216611c7d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7773ffffffffffffffffffffffffffffffffffffffff84168383611cba565b60003860003884865af16116bb5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166115ed576390b8ec186000526004601cfd5b60006101208284031215611d1257600080fd5b50919050565b600080610140808486031215611d2d57600080fd5b833567ffffffffffffffff811115611d4457600080fd5b8401808603821315611d5557600080fd5b9250611d6690508460208501611cff565b90509250929050565b60008083601f840112611d8157600080fd5b50813567ffffffffffffffff811115611d9957600080fd5b6020830191508360208260051b8501011115611db457600080fd5b9250929050565b60008060008060408587031215611dd157600080fd5b843567ffffffffffffffff80821115611de957600080fd5b611df588838901611d6f565b90965094506020870135915080821115611e0e57600080fd5b50611e1b87828801611d6f565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e7a57611e7a611e27565b60405290565b600082601f830112611e9157600080fd5b813567ffffffffffffffff80821115611eac57611eac611e27565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ef257611ef2611e27565b81604052838152866020858801011115611f0b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f4d57600080fd5b50565b8035611f5b81611f2b565b919050565b80358015158114611f5b57600080fd5b6000806000806101608587031215611f8757600080fd5b843567ffffffffffffffff80821115611f9f57600080fd5b908601906101408289031215611fb457600080fd5b611fbc611e56565b82358152602083013582811115611fd257600080fd5b611fde8a828601611e80565b602083015250604083013582811115611ff657600080fd5b6120028a828601611e80565b60408301525061201460608401611f50565b606082015261202560808401611f50565b608082015261203660a08401611f50565b60a082015260c083013560c082015260e083013560e082015261010061205d818501611f60565b9082015261012061206f848201611f60565b908201529550602087013591508082111561208957600080fd5b5061209687828801611d6f565b90945092506120aa90508660408701611cff565b905092959194509250565b6000602082840312156120c757600080fd5b81356120d281611f2b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610fec57610fec6120d9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261215057600080fd5b830160208101925035905067ffffffffffffffff81111561217057600080fd5b803603821315611db457600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081528135602082015260006121e2602084018461211b565b6101408060408601526121fa6101608601838561217f565b9250612209604087018761211b565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086850301606087015261224084848361217f565b93505061224f60608701611f50565b73ffffffffffffffffffffffffffffffffffffffff81166080870152915061227960808701611f50565b73ffffffffffffffffffffffffffffffffffffffff811660a087015291506122a360a08701611f50565b73ffffffffffffffffffffffffffffffffffffffff811660c0870152915060c086013560e0860152610100915060e0860135828601526122e4828701611f60565b91506101206122f68187018415159052565b612301818801611f60565b9250506123118186018315159052565b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361237b5761237b6120d9565b5060010190565b6000815180845260005b818110156123a85760208185018101518683018201520161238c565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201526000602083015161014080604085015261240f610160850183612382565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261244a8382612382565b9250506060850151612474608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124e78187018315159052565b860151801515838701529050612311565b81810381811115610fec57610fec6120d9565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261253f57600080fd5b9190910192915050565b60006020828403121561255b57600080fd5b5051919050565b60006020828403121561257457600080fd5b6120d282611f60565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125b257600080fd5b83018035915067ffffffffffffffff8211156125cd57600080fd5b602001915036819003821315611db457600080fd5b600080858511156125f257600080fd5b838611156125ff57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561264c5780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea264697066735822122072dbb78d1b2de37ff65ad3ce2fce2e7af265fb0795a099a48cb8a8b6b05ad2a664736f6c63430008110033";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
