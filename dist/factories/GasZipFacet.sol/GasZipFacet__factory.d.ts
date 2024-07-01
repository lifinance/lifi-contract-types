import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZipFacet, GasZipFacetInterface } from "../../GasZipFacet.sol/GasZipFacet";
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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200279238038062002792833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126f1620000a16000396000818160b9015281816103a0015261045001526126f16000f3fe60806040526004361061005a5760003560e01c8063867372e411610043578063867372e414610094578063ba956b9a146100a7578063d09d526c1461010457600080fd5b8063063b2abd1461005f5780634634879514610074575b600080fd5b61007261006d36600461214f565b610117565b005b34801561008057600080fd5b5061007261008f36600461220e565b610349565b6100726100a2366004612272565b610404565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100726101123660046122a7565b6104b3565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610192576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101a3344761230b565b9050868061010001516101e2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610220576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102438160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561027a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102b8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102f5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030a8a600001518b60c001518b8b336106d7565b60c08b01526103198a8861081f565b50479150508181111561033b5761033b600084610336858561230b565b6108b6565b505060009091555050505050565b6103546000856108ec565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659083906044016000604051808303818588803b1580156103e557600080fd5b505af11580156103f9573d6000803e3d6000fd5b505050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561049557600080fd5b505af11580156104a9573d6000803e3d6000fd5b5050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161052e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061053f344761230b565b9050846105648160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561059b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036105d9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610616576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610654576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610692576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106a488608001518960c00151610be4565b6106ae888861081f565b5047915050818111156106cb576106cb600084610336858561230b565b50506000909155505050565b600082808203610713576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561072260018561230b565b81811061073157610731612345565b90506020028101906107439190612374565b6107549060808101906060016123b2565b9050600061076182610d5a565b905073ffffffffffffffffffffffffffffffffffffffff821661078b57610788348261230b565b90505b60006107978888610e13565b90506107a38888610f1f565b6107b08a89898985610f8c565b6000826107bc85610d5a565b6107c6919061230b565b905089811015610811576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff1661085a576108558260c001518360e001518460a00151610404565b61087b565b61087b6108678280612374565b8360e001518460a001518460200135610349565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108aa9190612442565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108e2576108dd838383611324565b505050565b6108dd82826114a6565b6109026108fc60208301836123b2565b3b151590565b610938576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610978576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006109a761098d60608501604086016123b2565b73ffffffffffffffffffffffffffffffffffffffff161590565b6109b25760006109b8565b82608001355b905060006109d46109cf60608601604087016123b2565b610d5a565b905060006109eb6109cf60808701606088016123b2565b905082600003610a2257610a22610a0860608701604088016123b2565b610a1860408801602089016123b2565b87608001356115d0565b8460800135821015610a6d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610808565b600080610a7d60208801886123b2565b73ffffffffffffffffffffffffffffffffffffffff1685610aa160a08a018a612555565b604051610aaf9291906125c1565b60006040518083038185875af1925050503d8060008114610aec576040519150601f19603f3d011682016040523d82523d6000602084013e610af1565b606091505b509150915081610b0457610b0481611713565b6000610b196109cf60808a0160608b016123b2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610b4a60208b018b6123b2565b610b5a60608c0160408d016123b2565b610b6a60808d0160608e016123b2565b8c60800135898711610b7c5786610b86565b610b868a8861230b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80600003610c1e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c775780341015610c73576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ce4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0891906125d1565b905081811015610d4e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610808565b6108dd8333308561171d565b600073ffffffffffffffffffffffffffffffffffffffff821615610e0b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610de2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0691906125d1565b610e0d565b475b92915050565b60608160008167ffffffffffffffff811115610e3157610e31611f09565b604051908082528060200260200182016040528015610e5a578160200160208202803683370190505b5090506000805b83811015610f1457868682818110610e7b57610e7b612345565b9050602002810190610e8d9190612374565b610e9e9060808101906060016123b2565b9150610ea982610d5a565b838281518110610ebb57610ebb612345565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f0c5734838281518110610ef457610ef4612345565b60200260200101818151610f08919061230b565b9052505b600101610e61565b509095945050505050565b60005b818110156108dd5736838383818110610f3d57610f3d612345565b9050602002810190610f4f9190612374565b9050610f6160e0820160c083016125ea565b15610f8357610f83610f7960608301604084016123b2565b8260800135610be4565b50600101610f22565b83838383826001811461123f5760008585610fa860018561230b565b818110610fb757610fb7612345565b9050602002810190610fc99190612374565b610fda9060808101906060016123b2565b9050600089815b8181101561116b57368d8d83818110610ffc57610ffc612345565b905060200281019061100e9190612374565b905061102361098d60608301604084016123b2565b80611086575061108661103c60408301602084016123b2565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561109d575061109d61103c60208301836123b2565b801561112257506111226110b460a0830183612555565b6110c391600491600091612607565b6110cc91612631565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611158576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111628f826108ec565b50600101610fe1565b505060005b61117b60018561230b565b81101561123757600088888381811061119657611196612345565b90506020028101906111a89190612374565b6111b99060808101906060016123b2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461122e5785828151811061120057611200612345565b602002602001015161121182610d5a565b61121b919061230b565b9250821561122e5761122e8188856108b6565b50600101611170565b505050611318565b8760005b8181101561131557368b8b8381811061125e5761125e612345565b90506020028101906112709190612374565b905061128561098d60608301604084016123b2565b8061129e575061129e61103c60408301602084016123b2565b80156112b557506112b561103c60208301836123b2565b80156112cc57506112cc6110b460a0830183612555565b611302576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61130c8d826108ec565b50600101611243565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611371576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166113be576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561142b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144f91906125d1565b905080821115611495576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610808565b6114a0848484611937565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611536576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610808565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611590576040519150601f19603f3d011682016040523d82523d6000602084013e611595565b606091505b50509050806108dd576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166115f057505050565b73ffffffffffffffffffffffffffffffffffffffff821661163d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d691906125d1565b10156108dd576116e883836000611a0b565b6108dd83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a0b565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841661176a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117b7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611828573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184c91906125d1565b905061185a82868686611b8d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156118ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ee91906125d1565b6118f8919061230b565b1461192f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108dd9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611beb565b801580611aab57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aa991906125d1565b155b611b37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610808565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108dd9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611989565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114a09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611989565b6000611c4d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cfa9092919063ffffffff16565b9050805160001480611c6e575080806020019051810190611c6e9190612679565b6108dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610808565b6060611d098484600085611d11565b949350505050565b606082471015611da3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610808565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dcc9190612696565b60006040518083038185875af1925050503d8060008114611e09576040519150601f19603f3d011682016040523d82523d6000602084013e611e0e565b606091505b5091509150611e1f87838387611e2a565b979650505050505050565b60608315611ec0578251600003611eb95773ffffffffffffffffffffffffffffffffffffffff85163b611eb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610808565b5081611d09565b611d098383815115611ed55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080891906126a8565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f5c57611f5c611f09565b60405290565b600082601f830112611f7357600080fd5b813567ffffffffffffffff80821115611f8e57611f8e611f09565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fd457611fd4611f09565b81604052838152866020858801011115611fed57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461203157600080fd5b919050565b801515811461204457600080fd5b50565b803561203181612036565b6000610140828403121561206557600080fd5b61206d611f38565b905081358152602082013567ffffffffffffffff8082111561208e57600080fd5b61209a85838601611f62565b602084015260408401359150808211156120b357600080fd5b506120c084828501611f62565b6040830152506120d26060830161200d565b60608201526120e36080830161200d565b60808201526120f460a0830161200d565b60a082015260c082013560c082015260e082013560e082015261010061211b818401612047565b9082015261012061212d838201612047565b9082015292915050565b60006040828403121561214957600080fd5b50919050565b6000806000806060858703121561216557600080fd5b843567ffffffffffffffff8082111561217d57600080fd5b61218988838901612052565b9550602087013591508082111561219f57600080fd5b818701915087601f8301126121b357600080fd5b8135818111156121c257600080fd5b8860208260051b85010111156121d757600080fd5b6020830195508094505060408701359150808211156121f557600080fd5b5061220287828801612137565b91505092959194509250565b6000806000806080858703121561222457600080fd5b843567ffffffffffffffff81111561223b57600080fd5b850160e0818803121561224d57600080fd5b9350602085013592506122626040860161200d565b9396929550929360600135925050565b60008060006060848603121561228757600080fd5b833592506020840135915061229e6040850161200d565b90509250925092565b600080604083850312156122ba57600080fd5b823567ffffffffffffffff808211156122d257600080fd5b6122de86838701612052565b935060208501359150808211156122f457600080fd5b5061230185828601612137565b9150509250929050565b81810381811115610e0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123a857600080fd5b9190910192915050565b6000602082840312156123c457600080fd5b6123cd8261200d565b9392505050565b60005b838110156123ef5781810151838201526020016123d7565b50506000910152565b600081518084526124108160208601602086016123d4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261246b6101608501836123f8565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124a683826123f8565b92505060608501516124d0608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125438187018315159052565b90950151151593019290925250919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261258a57600080fd5b83018035915067ffffffffffffffff8211156125a557600080fd5b6020019150368190038213156125ba57600080fd5b9250929050565b8183823760009101908152919050565b6000602082840312156125e357600080fd5b5051919050565b6000602082840312156125fc57600080fd5b81356123cd81612036565b6000808585111561261757600080fd5b8386111561262457600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126715780818660040360031b1b83161692505b505092915050565b60006020828403121561268b57600080fd5b81516123cd81612036565b600082516123a88184602087016123d4565b6020815260006123cd60208301846123f856fea264697066735822122017d13e419bca65a9dcab726cf99c34caa8d33797c60fc36200c281c14d6ddf7464736f6c63430008110033";
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
        readonly name: "depositToGasZipERC20";
        readonly inputs: readonly [{
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
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
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipNative";
        readonly inputs: readonly [{
            readonly name: "_amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipSwapData";
                readonly type: "tuple";
                readonly internalType: "struct LibSwap.SwapData";
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
                readonly name: "amountOutMin";
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
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipSwapData";
                readonly type: "tuple";
                readonly internalType: "struct LibSwap.SwapData";
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
                readonly name: "amountOutMin";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
