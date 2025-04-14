import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801562000010575f80fd5b50604051620026a7380380620026a7833981016040819052620000339162000045565b6001600160a01b031660805262000074565b5f6020828403121562000056575f80fd5b81516001600160a01b03811681146200006d575f80fd5b9392505050565b60805161260c6200009b5f395f81816105ee0152818161062e0152610727015261260c5ff3fe608060405260043610610028575f3560e01c8063a74ccb351461002c578063e40f246014610041575b5f80fd5b61003f61003a3660046120b0565b610054565b005b61003f61004f366004612155565b610281565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476121a2565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102448a5f01518b60c001518b8b336104a1565b60c08b01526102538a886105e4565b504791505081811115610274576102745f8461026f85856121a2565b61083c565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030c34476121a2565b9050846103318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610368576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047088608001518960c00151610872565b61047a88886105e4565b504791505081811115610496576104965f8461026f85856121a2565b50505f909155505050565b5f828082036104dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ea6001856121a2565b8181106104f9576104f96121da565b905060200281019061050b9190612207565b61051c906080810190606001612243565b90505f610528826109e4565b905073ffffffffffffffffffffffffffffffffffffffff82166105525761054f34826121a2565b90505b5f61055d8888610a9a565b90506105698888610ba4565b6105768a89898985610c10565b5f82610581856109e4565b61058b91906121a2565b9050898110156105d6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61061782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610fba565b61062760e0820160c08301612263565b15610725577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff165f1b8460c0015184602001358560400135866060013587608001358860a00160208101906106b1919061227e565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b1681526106f397969594939291908b35906004016122d5565b5f604051808303815f87803b15801561070a575f80fd5b505af115801561071c573d5f803e3d5ffd5b50505050610801565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd825f0135846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c0015185602001358660400135876060013588608001358960a00160208101906107ae919061227e565b5f6040518a63ffffffff1660e01b81526004016107d29897969594939291906122d5565b5f604051808303818588803b1580156107e9575f80fd5b505af11580156107fb573d5f803e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108309190612389565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610868576108638383836110ef565b505050565b610863828261126e565b805f036108ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109045780341015610900576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561096e573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610992919061249b565b9050818110156109d8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cd565b61086383333085611394565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a92576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a69573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a8d919061249b565b610a94565b475b92915050565b6060815f8167ffffffffffffffff811115610ab757610ab7611e78565b604051908082528060200260200182016040528015610ae0578160200160208202803683370190505b5090505f805b83811015610b9957868682818110610b0057610b006121da565b9050602002810190610b129190612207565b610b23906080810190606001612243565b9150610b2e826109e4565b838281518110610b4057610b406121da565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b915734838281518110610b7957610b796121da565b60200260200101818151610b8d91906121a2565b9052505b600101610ae6565b509095945050505050565b5f5b818110156108635736838383818110610bc157610bc16121da565b9050602002810190610bd39190612207565b9050610be560e0820160c08301612263565b15610c0757610c07610bfd6060830160408401612243565b8260800135610872565b50600101610ba6565b838383838260018114610ed6575f8585610c2b6001856121a2565b818110610c3a57610c3a6121da565b9050602002810190610c4c9190612207565b610c5d906080810190606001612243565b90505f89815b81811015610e0457368d8d83818110610c7e57610c7e6121da565b9050602002810190610c909190612207565b9050610cbf610ca56060830160408401612243565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d215750610d21610cd86040830160208401612243565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d385750610d38610cd86020830183612243565b8015610dbb5750610dbb610d4f60a08301836124b2565b610d5d916004915f9161251a565b610d6691612541565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610df1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dfb8f826115a9565b50600101610c63565b50505f5b610e136001856121a2565b811015610ece575f888883818110610e2d57610e2d6121da565b9050602002810190610e3f9190612207565b610e50906080810190606001612243565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec557858281518110610e9757610e976121da565b6020026020010151610ea8826109e4565b610eb291906121a2565b92508215610ec557610ec581888561083c565b50600101610e08565b505050610fae565b875f5b81811015610fab57368b8b83818110610ef457610ef46121da565b9050602002810190610f069190612207565b9050610f1b610ca56060830160408401612243565b80610f345750610f34610cd86040830160208401612243565b8015610f4b5750610f4b610cd86020830183612243565b8015610f625750610f62610d4f60a08301836124b2565b610f98576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa28d826115a9565b50600101610ed9565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fda57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611027576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561109a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110be919061249b565b10156108635761086383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61187c565b73ffffffffffffffffffffffffffffffffffffffff831661113c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611189576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111f3573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611217919061249b565b90508082111561125d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cd565b6112688484846119e9565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112bb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112fe576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105cd565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611354576040519150601f19603f3d011682016040523d82523d5f602084013e611359565b606091505b5050905080610863576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166113e1576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661142e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa15801561149c573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114c0919061249b565b90506114ce82868686611a3f565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561153c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611560919061249b565b61156a91906121a2565b146115a1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115bf6115b96020830183612243565b3b151590565b6115f5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611634576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611648610ca56060850160408601612243565b611652575f611658565b82608001355b90505f61167361166e6060860160408701612243565b6109e4565b90505f61168961166e6080870160608801612243565b9050825f036116bf576116bf6116a56060870160408801612243565b6116b56040880160208901612243565b8760800135610fba565b846080013582101561170a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105cd565b5f806117196020880188612243565b73ffffffffffffffffffffffffffffffffffffffff168561173d60a08a018a6124b2565b60405161174b929190612589565b5f6040518083038185875af1925050503d805f8114611785576040519150601f19603f3d011682016040523d82523d5f602084013e61178a565b606091505b50915091508161179d5761179d81611a9d565b5f6117b161166e60808a0160608b01612243565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117e260208b018b612243565b6117f260608c0160408d01612243565b61180260808d0160608e01612243565b8c60800135898711611814578661181e565b61181e8a886121a2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119088482611aa7565b6112685760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526119df9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b62565b6112688482611b62565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108639084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161195d565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112689085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161195d565b8051602082018181fd5b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611acf9190612598565b5f604051808303815f865af19150503d805f8114611b08576040519150601f19603f3d011682016040523d82523d5f602084013e611b0d565b606091505b5091509150818015611b37575080511580611b37575080806020019051810190611b3791906125a9565b8015611b59575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611bc3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c6f9092919063ffffffff16565b905080515f1480611be3575080806020019051810190611be391906125a9565b610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105cd565b6060611c7d84845f85611c85565b949350505050565b606082471015611d17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105cd565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611d3f9190612598565b5f6040518083038185875af1925050503d805f8114611d79576040519150601f19603f3d011682016040523d82523d5f602084013e611d7e565b606091505b5091509150611d8f87838387611d9a565b979650505050505050565b60608315611e2f5782515f03611e285773ffffffffffffffffffffffffffffffffffffffff85163b611e28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105cd565b5081611c7d565b611c7d8383815115611e445781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cd91906125c4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ec957611ec9611e78565b60405290565b5f82601f830112611ede575f80fd5b813567ffffffffffffffff80821115611ef957611ef9611e78565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f3f57611f3f611e78565b81604052838152866020858801011115611f57575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f99575f80fd5b919050565b8015158114611fab575f80fd5b50565b8035611f9981611f9e565b5f6101408284031215611fca575f80fd5b611fd2611ea5565b905081358152602082013567ffffffffffffffff80821115611ff2575f80fd5b611ffe85838601611ecf565b60208401526040840135915080821115612016575f80fd5b5061202384828501611ecf565b60408301525061203560608301611f76565b606082015261204660808301611f76565b608082015261205760a08301611f76565b60a082015260c082013560c082015260e082013560e082015261010061207e818401611fae565b90820152610120612090838201611fae565b9082015292915050565b5f60e082840312156120aa575f80fd5b50919050565b5f805f8061012085870312156120c4575f80fd5b843567ffffffffffffffff808211156120db575f80fd5b6120e788838901611fb9565b955060208701359150808211156120fc575f80fd5b818701915087601f83011261210f575f80fd5b81358181111561211d575f80fd5b8860208260051b8501011115612131575f80fd5b60208301955080945050505061214a866040870161209a565b905092959194509250565b5f806101008385031215612167575f80fd5b823567ffffffffffffffff81111561217d575f80fd5b61218985828601611fb9565b925050612199846020850161209a565b90509250929050565b81810381811115610a94577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612239575f80fd5b9190910192915050565b5f60208284031215612253575f80fd5b61225c82611f76565b9392505050565b5f60208284031215612273575f80fd5b813561225c81611f9e565b5f6020828403121561228e575f80fd5b81356004811061225c575f80fd5b600481106122d1577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a083015261230b60c083018561229c565b8260e08301529998505050505050505050565b5f5b83811015612338578181015183820152602001612320565b50505f910152565b5f815180845261235781602086016020860161231e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526123b1610160850183612340565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123ec8382612340565b9250506060850151612416608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124898187018315159052565b90950151151593019290925250919050565b5f602082840312156124ab575f80fd5b5051919050565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124e5575f80fd5b83018035915067ffffffffffffffff8211156124ff575f80fd5b602001915036819003821315612513575f80fd5b9250929050565b5f8085851115612528575f80fd5b83861115612534575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125815780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f825161223981846020870161231e565b5f602082840312156125b9575f80fd5b815161225c81611f9e565b602081525f61225c602083018461234056fea26469706673582212202f7d5e44c4b3d7693c28a1b99c1ea847151d72aae1ef6623232f7edf18b6f64464736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
