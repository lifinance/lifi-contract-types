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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620027b1380380620027b1833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127176200009a60003960008181609e01526107cc01526127176000f3fe60806040526004361061003f5760003560e01c80633497d1161461004457806346fd98e214610059578063ba956b9a1461008c578063d296e0e4146100e5575b600080fd5b61005761005236600461213d565b6100f8565b005b34801561006557600080fd5b506100796100743660046121e9565b61032a565b6040519081526020015b60405180910390f35b34801561009857600080fd5b506100c07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610083565b6100576100f33660046122a2565b6103e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610173576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101843447612320565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610201576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102248160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610299576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102eb8a600001518b60c001518b8b3361064b565b60c08b01526102fa8a8861078e565b50479150508181111561031c5761031c6000846103178585612320565b610878565b505060009091555050505050565b600060208251111561039d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b82518110156103e1578281815181106103bb576103bb612333565b602002602001015160ff16600883901b17915080806103d990612362565b9150506103a0565b50919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610462576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006104733447612320565b9050846104988160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104cf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361050d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361054a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610588576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105c6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff1615610618576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610622888861078e565b50479150508181111561063f5761063f6000846103178585612320565b50506000909155505050565b600082808203610687576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610696600185612320565b8181106106a5576106a5612333565b90506020028101906106b7919061239a565b6106c89060808101906060016123d8565b905060006106d5826108ae565b905073ffffffffffffffffffffffffffffffffffffffff82166106ff576106fc3482612320565b90505b600061070b8888610967565b90506107178888610a73565b6107248a89898985610ae0565b600082610730856108ae565b61073a9190612320565b905089811015610780576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610394565b9a9950505050505050505050565b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815282356004820152602083013560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044016000604051808303818588803b15801561082457600080fd5b505af1158015610838573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086c9190612468565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108a45761089f838383610e92565b505050565b61089f8282611014565b600073ffffffffffffffffffffffffffffffffffffffff82161561095f576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a919061257b565b610961565b475b92915050565b60608160008167ffffffffffffffff81111561098557610985611ecb565b6040519080825280602002602001820160405280156109ae578160200160208202803683370190505b5090506000805b83811015610a68578686828181106109cf576109cf612333565b90506020028101906109e1919061239a565b6109f29060808101906060016123d8565b91506109fd826108ae565b838281518110610a0f57610a0f612333565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a605734838281518110610a4857610a48612333565b60200260200101818151610a5c9190612320565b9052505b6001016109b5565b509095945050505050565b60005b8181101561089f5736838383818110610a9157610a91612333565b9050602002810190610aa3919061239a565b9050610ab560e0820160c08301612594565b15610ad757610ad7610acd60608301604084016123d8565b826080013561113e565b50600101610a76565b838383838260018114610dad5760008585610afc600185612320565b818110610b0b57610b0b612333565b9050602002810190610b1d919061239a565b610b2e9060808101906060016123d8565b9050600089815b81811015610cd957368d8d83818110610b5057610b50612333565b9050602002810190610b62919061239a565b9050610b91610b7760608301604084016123d8565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610bf45750610bf4610baa60408301602084016123d8565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c0b5750610c0b610baa60208301836123d8565b8015610c905750610c90610c2260a08301836125b1565b610c319160049160009161261d565b610c3a91612647565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cc6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd08f826112b4565b50600101610b35565b505060005b610ce9600185612320565b811015610da5576000888883818110610d0457610d04612333565b9050602002810190610d16919061239a565b610d279060808101906060016123d8565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9c57858281518110610d6e57610d6e612333565b6020026020010151610d7f826108ae565b610d899190612320565b92508215610d9c57610d9c818885610878565b50600101610cde565b505050610e86565b8760005b81811015610e8357368b8b83818110610dcc57610dcc612333565b9050602002810190610dde919061239a565b9050610df3610b7760608301604084016123d8565b80610e0c5750610e0c610baa60408301602084016123d8565b8015610e235750610e23610baa60208301836123d8565b8015610e3a5750610e3a610c2260a08301836125b1565b610e70576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e7a8d826112b4565b50600101610db1565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610edf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbd919061257b565b905080821115611003576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610394565b61100e848484611592565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611061576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110a4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610394565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110fe576040519150601f19603f3d011682016040523d82523d6000602084013e611103565b606091505b505090508061089f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003611178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111d157803410156111cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561123e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611262919061257b565b9050818110156112a8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610394565b61089f83333085611666565b6112ca6112c460208301836123d8565b3b151590565b611300576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611340576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611355610b7760608501604086016123d8565b611360576000611366565b82608001355b9050600061138261137d60608601604087016123d8565b6108ae565b9050600061139961137d60808701606088016123d8565b9050826000036113d0576113d06113b660608701604088016123d8565b6113c660408801602089016123d8565b8760800135611880565b846080013582101561141b576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610394565b60008061142b60208801886123d8565b73ffffffffffffffffffffffffffffffffffffffff168561144f60a08a018a6125b1565b60405161145d92919061268f565b60006040518083038185875af1925050503d806000811461149a576040519150601f19603f3d011682016040523d82523d6000602084013e61149f565b606091505b5091509150816114b2576114b2816119c3565b60006114c761137d60808a0160608b016123d8565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896114f860208b018b6123d8565b61150860608c0160408d016123d8565b61151860808d0160608e016123d8565b8c6080013589871161152a5786611534565b6115348a88612320565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119cd565b73ffffffffffffffffffffffffffffffffffffffff84166116b3576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611700576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611771573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611795919061257b565b90506117a382868686611adc565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611813573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611837919061257b565b6118419190612320565b14611878576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166118a057505050565b73ffffffffffffffffffffffffffffffffffffffff82166118ed576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611962573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611986919061257b565b101561089f5761199883836000611b3a565b61089f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b3a565b8051602082018181fd5b6000611a2f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cbc9092919063ffffffff16565b9050805160001480611a50575080806020019051810190611a50919061269f565b61089f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610394565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261100e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016115e4565b801580611bda57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611bb4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd8919061257b565b155b611c66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610394565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261089f9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115e4565b6060611ccb8484600085611cd3565b949350505050565b606082471015611d65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610394565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d8e91906126bc565b60006040518083038185875af1925050503d8060008114611dcb576040519150601f19603f3d011682016040523d82523d6000602084013e611dd0565b606091505b5091509150611de187838387611dec565b979650505050505050565b60608315611e82578251600003611e7b5773ffffffffffffffffffffffffffffffffffffffff85163b611e7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610394565b5081611ccb565b611ccb8383815115611e975781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039491906126ce565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f1e57611f1e611ecb565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f6b57611f6b611ecb565b604052919050565b600082601f830112611f8457600080fd5b813567ffffffffffffffff811115611f9e57611f9e611ecb565b611fcf60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611f24565b818152846020838601011115611fe457600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461202557600080fd5b919050565b801515811461203857600080fd5b50565b80356120258161202a565b6000610140828403121561205957600080fd5b612061611efa565b905081358152602082013567ffffffffffffffff8082111561208257600080fd5b61208e85838601611f73565b602084015260408401359150808211156120a757600080fd5b506120b484828501611f73565b6040830152506120c660608301612001565b60608201526120d760808301612001565b60808201526120e860a08301612001565b60a082015260c082013560c082015260e082013560e082015261010061210f81840161203b565b9082015261012061212183820161203b565b9082015292915050565b6000604082840312156103e157600080fd5b6000806000806080858703121561215357600080fd5b843567ffffffffffffffff8082111561216b57600080fd5b61217788838901612046565b9550602087013591508082111561218d57600080fd5b818701915087601f8301126121a157600080fd5b8135818111156121b057600080fd5b8860208260051b85010111156121c557600080fd5b6020830195508094505050506121de866040870161212b565b905092959194509250565b600060208083850312156121fc57600080fd5b823567ffffffffffffffff8082111561221457600080fd5b818501915085601f83011261222857600080fd5b81358181111561223a5761223a611ecb565b8060051b915061224b848301611f24565b818152918301840191848101908884111561226557600080fd5b938501935b83851015612296578435925060ff831683146122865760008081fd5b828252938501939085019061226a565b98975050505050505050565b600080606083850312156122b557600080fd5b823567ffffffffffffffff8111156122cc57600080fd5b6122d885828601612046565b9250506122e8846020850161212b565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610961576109616122f1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612393576123936122f1565b5060010190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123ce57600080fd5b9190910192915050565b6000602082840312156123ea57600080fd5b6123f382612001565b9392505050565b60005b838110156124155781810151838201526020016123fd565b50506000910152565b600081518084526124368160208601602086016123fa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261249161016085018361241e565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124cc838261241e565b92505060608501516124f6608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125698187018315159052565b90950151151593019290925250919050565b60006020828403121561258d57600080fd5b5051919050565b6000602082840312156125a657600080fd5b81356123f38161202a565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125e657600080fd5b83018035915067ffffffffffffffff82111561260157600080fd5b60200191503681900382131561261657600080fd5b9250929050565b6000808585111561262d57600080fd5b8386111561263a57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126875780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156126b157600080fd5b81516123f38161202a565b600082516123ce8184602087016123fa565b6020815260006123f3602083018461241e56fea26469706673582212209f9389a0c1ae366fb798e0209b95a41aa0259bcb4ee4a937f504e12e820ff77364736f6c63430008110033";
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
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
