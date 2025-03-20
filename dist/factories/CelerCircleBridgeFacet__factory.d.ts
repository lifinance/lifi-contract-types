import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620027ad380380620027ad833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a0516126c0620000ed600039600081816102440152818161050b0152818161059801528181610772015261088401526000818161079301526107be01526126c06000f3fe6080604052600436106100295760003560e01c80638fab06631461002e578063bab657d814610043575b600080fd5b61004161003c3660046121ce565b610063565b005b34801561004f57600080fd5b5061004161005e366004612268565b610320565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef34476122ab565b90508580610100015161012e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561016c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610204576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610241576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102e18b600001518c60c001518c8c336105df565b60c08c01526102ef8b610727565b50479350505050818111156103135761031360008461030e85856122ab565b61092a565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161039b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a8826122e5565b806101000151156103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103ee836122e5565b8061012001511561042b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610434846122e5565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610485576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610500576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610509856122e5565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610593576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c17f00000000000000000000000000000000000000000000000000000000000000008860c00135610960565b6105d26105cd886122e5565b610727565b5050600090935550505050565b60008280820361061b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561062a6001856122ab565b818110610639576106396122f1565b905060200281019061064b9190612320565b61065c90608081019060600161235e565b9050600061066982610ad6565b905073ffffffffffffffffffffffffffffffffffffffff82166106935761069034826122ab565b90505b600061069f8888610b8f565b90506106ab8888610c9b565b6106b88a89898985610d08565b6000826106c485610ad6565b6106ce91906122ab565b905089811015610719576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff101561076d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107bc7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c001516110ba565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632fbb00ac8260c001518360e001516108238560a0015173ffffffffffffffffffffffffffffffffffffffff1690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935267ffffffffffffffff9091166024830152604482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660648201526084016020604051808303816000875af11580156108cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ef9190612379565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161091f9190612411565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610956576109518383836111f1565b505050565b6109518282611373565b8060000361099a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109f357803410156109ef576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a849190612524565b905081811015610aca576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b6109518333308561149d565b600073ffffffffffffffffffffffffffffffffffffffff821615610b87576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b829190612524565b610b89565b475b92915050565b60608160008167ffffffffffffffff811115610bad57610bad611fa0565b604051908082528060200260200182016040528015610bd6578160200160208202803683370190505b5090506000805b83811015610c9057868682818110610bf757610bf76122f1565b9050602002810190610c099190612320565b610c1a90608081019060600161235e565b9150610c2582610ad6565b838281518110610c3757610c376122f1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c885734838281518110610c7057610c706122f1565b60200260200101818151610c8491906122ab565b9052505b600101610bdd565b509095945050505050565b60005b818110156109515736838383818110610cb957610cb96122f1565b9050602002810190610ccb9190612320565b9050610cdd60e0820160c0830161253d565b15610cff57610cff610cf5606083016040840161235e565b8260800135610960565b50600101610c9e565b838383838260018114610fd55760008585610d246001856122ab565b818110610d3357610d336122f1565b9050602002810190610d459190612320565b610d5690608081019060600161235e565b9050600089815b81811015610f0157368d8d83818110610d7857610d786122f1565b9050602002810190610d8a9190612320565b9050610db9610d9f606083016040840161235e565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e1c5750610e1c610dd2604083016020840161235e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e335750610e33610dd2602083018361235e565b8015610eb85750610eb8610e4a60a083018361255a565b610e59916004916000916125c6565b610e62916125f0565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610eee576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef88f826116b7565b50600101610d5d565b505060005b610f116001856122ab565b811015610fcd576000888883818110610f2c57610f2c6122f1565b9050602002810190610f3e9190612320565b610f4f90608081019060600161235e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fc457858281518110610f9657610f966122f1565b6020026020010151610fa782610ad6565b610fb191906122ab565b92508215610fc457610fc481888561092a565b50600101610f06565b5050506110ae565b8760005b818110156110ab57368b8b83818110610ff457610ff46122f1565b90506020028101906110069190612320565b905061101b610d9f606083016040840161235e565b806110345750611034610dd2604083016020840161235e565b801561104b575061104b610dd2602083018361235e565b80156110625750611062610e4a60a083018361255a565b611098576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110a28d826116b7565b50600101610fd9565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110da57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611127576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561119c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c09190612524565b10156109515761095183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611995565b73ffffffffffffffffffffffffffffffffffffffff831661123e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661128b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156112f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131c9190612524565b905080821115611362576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610710565b61136d848484611b03565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113c0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611403576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610710565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461145d576040519150601f19603f3d011682016040523d82523d6000602084013e611462565b606091505b5050905080610951576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166114ea576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611537576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115cc9190612524565b90506115da82868686611b59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561164a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166e9190612524565b61167891906122ab565b146116af576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116cd6116c7602083018361235e565b3b151590565b611703576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611743576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611758610d9f606085016040860161235e565b611763576000611769565b82608001355b90506000611785611780606086016040870161235e565b610ad6565b9050600061179c611780608087016060880161235e565b9050826000036117d3576117d36117b9606087016040880161235e565b6117c9604088016020890161235e565b87608001356110ba565b846080013582101561181e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610710565b60008061182e602088018861235e565b73ffffffffffffffffffffffffffffffffffffffff168561185260a08a018a61255a565b604051611860929190612638565b60006040518083038185875af1925050503d806000811461189d576040519150601f19603f3d011682016040523d82523d6000602084013e6118a2565b606091505b5091509150816118b5576118b581611bb7565b60006118ca61178060808a0160608b0161235e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118fb60208b018b61235e565b61190b60608c0160408d0161235e565b61191b60808d0160608e0161235e565b8c6080013589871161192d5786611937565b6119378a886122ab565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a218482611bc1565b61136d5760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611af99085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c82565b61136d8482611c82565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109519084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a77565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261136d9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a77565b8051602082018181fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611beb9190612648565b6000604051808303816000865af19150503d8060008114611c28576040519150601f19603f3d011682016040523d82523d6000602084013e611c2d565b606091505b5091509150818015611c57575080511580611c57575080806020019051810190611c57919061265a565b8015611c79575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b6000611ce4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d919092919063ffffffff16565b9050805160001480611d05575080806020019051810190611d05919061265a565b610951576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610710565b6060611da08484600085611da8565b949350505050565b606082471015611e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610710565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e639190612648565b60006040518083038185875af1925050503d8060008114611ea0576040519150601f19603f3d011682016040523d82523d6000602084013e611ea5565b606091505b5091509150611eb687838387611ec1565b979650505050505050565b60608315611f57578251600003611f505773ffffffffffffffffffffffffffffffffffffffff85163b611f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610710565b5081611da0565b611da08383815115611f6c5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107109190612677565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611ff357611ff3611fa0565b60405290565b600082601f83011261200a57600080fd5b813567ffffffffffffffff8082111561202557612025611fa0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561206b5761206b611fa0565b8160405283815286602085880101111561208457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120c857600080fd5b919050565b80151581146120db57600080fd5b50565b80356120c8816120cd565b600061014082840312156120fc57600080fd5b612104611fcf565b905081358152602082013567ffffffffffffffff8082111561212557600080fd5b61213185838601611ff9565b6020840152604084013591508082111561214a57600080fd5b5061215784828501611ff9565b604083015250612169606083016120a4565b606082015261217a608083016120a4565b608082015261218b60a083016120a4565b60a082015260c082013560c082015260e082013560e08201526101006121b28184016120de565b908201526101206121c48382016120de565b9082015292915050565b6000806000604084860312156121e357600080fd5b833567ffffffffffffffff808211156121fb57600080fd5b612207878388016120e9565b9450602086013591508082111561221d57600080fd5b818601915086601f83011261223157600080fd5b81358181111561224057600080fd5b8760208260051b850101111561225557600080fd5b6020830194508093505050509250925092565b60006020828403121561227a57600080fd5b813567ffffffffffffffff81111561229157600080fd5b820161014081850312156122a457600080fd5b9392505050565b81810381811115610b89577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b8936836120e9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261235457600080fd5b9190910192915050565b60006020828403121561237057600080fd5b6122a4826120a4565b60006020828403121561238b57600080fd5b815167ffffffffffffffff811681146122a457600080fd5b60005b838110156123be5781810151838201526020016123a6565b50506000910152565b600081518084526123df8160208601602086016123a3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261243a6101608501836123c7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261247583826123c7565b925050606085015161249f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125128187018315159052565b90950151151593019290925250919050565b60006020828403121561253657600080fd5b5051919050565b60006020828403121561254f57600080fd5b81356122a4816120cd565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261258f57600080fd5b83018035915067ffffffffffffffff8211156125aa57600080fd5b6020019150368190038213156125bf57600080fd5b9250929050565b600080858511156125d657600080fd5b838611156125e357600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126305780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600082516123548184602087016123a3565b60006020828403121561266c57600080fd5b81516122a4816120cd565b6020815260006122a460208301846123c756fea2646970667358221220a096b8887c3aaa8aa58a6b48e9d229d5d9981cd678dbc8dba0a654f07ff699bb64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidSendingToken";
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
    }];
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
