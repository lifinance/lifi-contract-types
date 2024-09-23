import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027c1380380620027c1833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127276200009a6000396000818160b1015261080901526127276000f3fe60806040526004361061003f5760003560e01c80633c36bac11461004457806346fd98e214610059578063b78e6e401461008c578063ba956b9a1461009f575b600080fd5b61005761005236600461214d565b6100f8565b005b34801561006557600080fd5b506100796100743660046121f9565b6103bc565b6040519081526020015b60405180910390f35b61005761009a3660046122b2565b610407565b3480156100ab57600080fd5b506100d37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610083565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610173576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101843447612330565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610201576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102248160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610299576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033289896102e6600182612330565b8181106102f5576102f5612343565b90506020028101906103079190612372565b6103189060808101906060016123b0565b73ffffffffffffffffffffffffffffffffffffffff161590565b610368576040517ff029264900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037d8a600001518b60c001518b8b3361066b565b60c08b015261038c8a886107b3565b5047915050818111156103ae576103ae6000846103a98585612330565b6108a2565b505060009091555050505050565b6000805b8251811015610401578281815181106103db576103db612343565b602002602001015160ff16600883901b17915080806103f9906123d2565b9150506103c0565b50919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610482576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104933447612330565b9050846104b88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361052d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361056a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156105a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105e6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff1615610638576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064288886107b3565b50479150508181111561065f5761065f6000846103a98585612330565b50506000909155505050565b6000828082036106a7576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856106b6600185612330565b8181106106c5576106c5612343565b90506020028101906106d79190612372565b6106e89060808101906060016123b0565b905060006106f5826108d8565b905073ffffffffffffffffffffffffffffffffffffffff821661071f5761071c3482612330565b90505b600061072b8888610991565b90506107378888610a9d565b6107448a89898985610b0a565b600082610750856108d8565b61075a9190612330565b9050898110156107a5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60c082015160a08301516040517f6e553f650000000000000000000000000000000000000000000000000000000081528335600482015273ffffffffffffffffffffffffffffffffffffffff91821660248201527f000000000000000000000000000000000000000000000000000000000000000090911691636e553f65916044016000604051808303818588803b15801561084e57600080fd5b505af1158015610862573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108969190612478565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108ce576108c9838383610ea2565b505050565b6108c98282611024565b600073ffffffffffffffffffffffffffffffffffffffff821615610989576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610960573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610984919061258b565b61098b565b475b92915050565b60608160008167ffffffffffffffff8111156109af576109af611edb565b6040519080825280602002602001820160405280156109d8578160200160208202803683370190505b5090506000805b83811015610a92578686828181106109f9576109f9612343565b9050602002810190610a0b9190612372565b610a1c9060808101906060016123b0565b9150610a27826108d8565b838281518110610a3957610a39612343565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a8a5734838281518110610a7257610a72612343565b60200260200101818151610a869190612330565b9052505b6001016109df565b509095945050505050565b60005b818110156108c95736838383818110610abb57610abb612343565b9050602002810190610acd9190612372565b9050610adf60e0820160c083016125a4565b15610b0157610b01610af760608301604084016123b0565b826080013561114e565b50600101610aa0565b838383838260018114610dbd5760008585610b26600185612330565b818110610b3557610b35612343565b9050602002810190610b479190612372565b610b589060808101906060016123b0565b9050600089815b81811015610ce957368d8d83818110610b7a57610b7a612343565b9050602002810190610b8c9190612372565b9050610ba161031860608301604084016123b0565b80610c045750610c04610bba60408301602084016123b0565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c1b5750610c1b610bba60208301836123b0565b8015610ca05750610ca0610c3260a08301836125c1565b610c419160049160009161262d565b610c4a91612657565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cd6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ce08f826112c4565b50600101610b5f565b505060005b610cf9600185612330565b811015610db5576000888883818110610d1457610d14612343565b9050602002810190610d269190612372565b610d379060808101906060016123b0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dac57858281518110610d7e57610d7e612343565b6020026020010151610d8f826108d8565b610d999190612330565b92508215610dac57610dac8188856108a2565b50600101610cee565b505050610e96565b8760005b81811015610e9357368b8b83818110610ddc57610ddc612343565b9050602002810190610dee9190612372565b9050610e0361031860608301604084016123b0565b80610e1c5750610e1c610bba60408301602084016123b0565b8015610e335750610e33610bba60208301836123b0565b8015610e4a5750610e4a610c3260a08301836125c1565b610e80576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8a8d826112c4565b50600101610dc1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610eef576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f3c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcd919061258b565b905080821115611013576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079c565b61101e8484846115a2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611071576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110b4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461110e576040519150601f19603f3d011682016040523d82523d6000602084013e611113565b606091505b50509050806108c9576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611188576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111e157803410156111dd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561124e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611272919061258b565b9050818110156112b8576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079c565b6108c983333085611676565b6112da6112d460208301836123b0565b3b151590565b611310576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611350576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061136561031860608501604086016123b0565b611370576000611376565b82608001355b9050600061139261138d60608601604087016123b0565b6108d8565b905060006113a961138d60808701606088016123b0565b9050826000036113e0576113e06113c660608701604088016123b0565b6113d660408801602089016123b0565b8760800135611890565b846080013582101561142b576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079c565b60008061143b60208801886123b0565b73ffffffffffffffffffffffffffffffffffffffff168561145f60a08a018a6125c1565b60405161146d92919061269f565b60006040518083038185875af1925050503d80600081146114aa576040519150601f19603f3d011682016040523d82523d6000602084013e6114af565b606091505b5091509150816114c2576114c2816119d3565b60006114d761138d60808a0160608b016123b0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961150860208b018b6123b0565b61151860608c0160408d016123b0565b61152860808d0160608e016123b0565b8c6080013589871161153a5786611544565b6115448a88612330565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c99084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119dd565b73ffffffffffffffffffffffffffffffffffffffff84166116c3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611710576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611781573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a5919061258b565b90506117b382868686611aec565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611823573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611847919061258b565b6118519190612330565b14611888576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118b057505050565b73ffffffffffffffffffffffffffffffffffffffff82166118fd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611972573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611996919061258b565b10156108c9576119a883836000611b4a565b6108c983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b4a565b8051602082018181fd5b6000611a3f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ccc9092919063ffffffff16565b9050805160001480611a60575080806020019051810190611a6091906126af565b6108c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079c565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261101e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115f4565b801580611bea57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611bc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be8919061258b565b155b611c76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079c565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108c99084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115f4565b6060611cdb8484600085611ce3565b949350505050565b606082471015611d75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079c565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d9e91906126cc565b60006040518083038185875af1925050503d8060008114611ddb576040519150601f19603f3d011682016040523d82523d6000602084013e611de0565b606091505b5091509150611df187838387611dfc565b979650505050505050565b60608315611e92578251600003611e8b5773ffffffffffffffffffffffffffffffffffffffff85163b611e8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079c565b5081611cdb565b611cdb8383815115611ea75781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079c91906126de565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f2e57611f2e611edb565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f7b57611f7b611edb565b604052919050565b600082601f830112611f9457600080fd5b813567ffffffffffffffff811115611fae57611fae611edb565b611fdf60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611f34565b818152846020838601011115611ff457600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461203557600080fd5b919050565b801515811461204857600080fd5b50565b80356120358161203a565b6000610140828403121561206957600080fd5b612071611f0a565b905081358152602082013567ffffffffffffffff8082111561209257600080fd5b61209e85838601611f83565b602084015260408401359150808211156120b757600080fd5b506120c484828501611f83565b6040830152506120d660608301612011565b60608201526120e760808301612011565b60808201526120f860a08301612011565b60a082015260c082013560c082015260e082013560e082015261010061211f81840161204b565b9082015261012061213183820161204b565b9082015292915050565b60006020828403121561040157600080fd5b6000806000806060858703121561216357600080fd5b843567ffffffffffffffff8082111561217b57600080fd5b61218788838901612056565b9550602087013591508082111561219d57600080fd5b818701915087601f8301126121b157600080fd5b8135818111156121c057600080fd5b8860208260051b85010111156121d557600080fd5b6020830195508094505050506121ee866040870161213b565b905092959194509250565b6000602080838503121561220c57600080fd5b823567ffffffffffffffff8082111561222457600080fd5b818501915085601f83011261223857600080fd5b81358181111561224a5761224a611edb565b8060051b915061225b848301611f34565b818152918301840191848101908884111561227557600080fd5b938501935b838510156122a6578435925060ff831683146122965760008081fd5b828252938501939085019061227a565b98975050505050505050565b600080604083850312156122c557600080fd5b823567ffffffffffffffff8111156122dc57600080fd5b6122e885828601612056565b9250506122f8846020850161213b565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561098b5761098b612301565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123a657600080fd5b9190910192915050565b6000602082840312156123c257600080fd5b6123cb82612011565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361240357612403612301565b5060010190565b60005b8381101561242557818101518382015260200161240d565b50506000910152565b6000815180845261244681602086016020860161240a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124a161016085018361242e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124dc838261242e565b9250506060850151612506608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125798187018315159052565b90950151151593019290925250919050565b60006020828403121561259d57600080fd5b5051919050565b6000602082840312156125b657600080fd5b81356123cb8161203a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125f657600080fd5b83018035915067ffffffffffffffff82111561261157600080fd5b60200191503681900382131561262657600080fd5b9250929050565b6000808585111561263d57600080fd5b8386111561264a57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126975780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126c157600080fd5b81516123cb8161203a565b600082516123a681846020870161240a565b6020815260006123cb602083018461242e56fea2646970667358221220dde9924f53fd20221c4368dbcf8d65bbd589ddbecce5da55e29a278c79eede2b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
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
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlySwapsFromERC20ToNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
