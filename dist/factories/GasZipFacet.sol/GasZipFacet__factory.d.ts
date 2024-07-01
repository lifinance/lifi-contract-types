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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200279338038062002793833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126f2620000a16000396000818160b90152818161016e015261021e01526126f26000f3fe60806040526004361061005a5760003560e01c8063b5e77acb11610043578063b5e77acb14610094578063ba956b9a146100a7578063c443ee1c1461010457600080fd5b8063463487951461005f578063867372e414610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004611f33565b610117565b005b61007f61008f366004611f97565b6101d2565b61007f6100a23660046121e9565b610281565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61007f61011236600461224d565b6104aa565b6101226000856106d7565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659083906044016000604051808303818588803b1580156101b357600080fd5b505af11580156101c7573d6000803e3d6000fd5b505050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561026357600080fd5b505af1158015610277573d6000803e3d6000fd5b5050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030d344761230c565b9050846103328160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610369576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610422576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610460576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047288608001518960c001516109d4565b61047c8888610b4f565b50479150508181111561049e5761049e600084610499858561230c565b610be7565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610525576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610536344761230c565b905086806101000151610575576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156105b3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105d68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561060d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361064b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610688576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61069d8a600001518b60c001518b8b33610c18565b60c08b01526106ac8a88610b4f565b5047915050818111156106c9576106c9600084610499858561230c565b505060009091555050505050565b6106ed6106e76020830183612346565b3b151590565b610723576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610763576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006107926107786060850160408601612346565b73ffffffffffffffffffffffffffffffffffffffff161590565b61079d5760006107a3565b82608001355b905060006107bf6107ba6060860160408701612346565b610d5b565b905060006107d66107ba6080870160608801612346565b90508260000361080d5761080d6107f36060870160408801612346565b6108036040880160208901612346565b8760800135610e14565b846080013582101561085d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b60008061086d6020880188612346565b73ffffffffffffffffffffffffffffffffffffffff168561089160a08a018a612368565b60405161089f9291906123d4565b60006040518083038185875af1925050503d80600081146108dc576040519150601f19603f3d011682016040523d82523d6000602084013e6108e1565b606091505b5091509150816108f4576108f481610f57565b60006109096107ba60808a0160608b01612346565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961093a60208b018b612346565b61094a60608c0160408d01612346565b61095a60808d0160608e01612346565b8c6080013589871161096c5786610976565b6109768a8861230c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80600003610a0e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a675780341015610a63576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ad4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af891906123e4565b905081811015610b3e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610854565b610b4a83333085610f61565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610b8a57610b858260c0015182600001358460a001516101d2565b610bac565b610bac610b9a60208301836123fd565b60a08401518335906040850135610117565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610bdb91906124a9565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610c0e57610b4a83838361117b565b610b4a82826112fd565b600082808203610c54576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c6360018561230c565b818110610c7257610c726125bc565b9050602002810190610c8491906123fd565b610c95906080810190606001612346565b90506000610ca282610d5b565b905073ffffffffffffffffffffffffffffffffffffffff8216610ccc57610cc9348261230c565b90505b6000610cd88888611427565b9050610ce48888611533565b610cf18a898989856115a0565b600082610cfd85610d5b565b610d07919061230c565b905089811015610d4d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610854565b9a9950505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610e0c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610de3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0791906123e4565b610e0e565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610e3457505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e81576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ef6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1a91906123e4565b1015610b4a57610f2c83836000611938565b610b4a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611938565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416610fae576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ffb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561106c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109091906123e4565b905061109e82868686611b38565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561110e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113291906123e4565b61113c919061230c565b14611173576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111c8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611215576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a691906123e4565b9050808211156112ec576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610854565b6112f7848484611b96565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661134a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561138d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610854565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113e7576040519150601f19603f3d011682016040523d82523d6000602084013e6113ec565b606091505b5050905080610b4a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff81111561144557611445611fcc565b60405190808252806020026020018201604052801561146e578160200160208202803683370190505b5090506000805b838110156115285786868281811061148f5761148f6125bc565b90506020028101906114a191906123fd565b6114b2906080810190606001612346565b91506114bd82610d5b565b8382815181106114cf576114cf6125bc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166115205734838281518110611508576115086125bc565b6020026020010181815161151c919061230c565b9052505b600101611475565b509095945050505050565b60005b81811015610b4a5736838383818110611551576115516125bc565b905060200281019061156391906123fd565b905061157560e0820160c083016125eb565b156115975761159761158d6060830160408401612346565b82608001356109d4565b50600101611536565b83838383826001811461185357600085856115bc60018561230c565b8181106115cb576115cb6125bc565b90506020028101906115dd91906123fd565b6115ee906080810190606001612346565b9050600089815b8181101561177f57368d8d83818110611610576116106125bc565b905060200281019061162291906123fd565b90506116376107786060830160408401612346565b8061169a575061169a6116506040830160208401612346565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116b157506116b16116506020830183612346565b801561173657506117366116c860a0830183612368565b6116d791600491600091612608565b6116e091612632565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61176c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117768f826106d7565b506001016115f5565b505060005b61178f60018561230c565b81101561184b5760008888838181106117aa576117aa6125bc565b90506020028101906117bc91906123fd565b6117cd906080810190606001612346565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461184257858281518110611814576118146125bc565b602002602001015161182582610d5b565b61182f919061230c565b9250821561184257611842818885610be7565b50600101611784565b50505061192c565b8760005b8181101561192957368b8b83818110611872576118726125bc565b905060200281019061188491906123fd565b90506118996107786060830160408401612346565b806118b257506118b26116506040830160208401612346565b80156118c957506118c96116506020830183612346565b80156118e057506118e06116c860a0830183612368565b611916576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119208d826106d7565b50600101611857565b50505b50505050505050505050565b8015806119d857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156119b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d691906123e4565b155b611a64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610854565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b4a9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bec565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112f79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611ab6565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b4a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611ab6565b6000611c4e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cfb9092919063ffffffff16565b9050805160001480611c6f575080806020019051810190611c6f919061267a565b610b4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610854565b6060611d0a8484600085611d12565b949350505050565b606082471015611da4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610854565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611dcd9190612697565b60006040518083038185875af1925050503d8060008114611e0a576040519150601f19603f3d011682016040523d82523d6000602084013e611e0f565b606091505b5091509150611e2087838387611e2b565b979650505050505050565b60608315611ec1578251600003611eba5773ffffffffffffffffffffffffffffffffffffffff85163b611eba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610854565b5081611d0a565b611d0a8383815115611ed65781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085491906126a9565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f2e57600080fd5b919050565b60008060008060808587031215611f4957600080fd5b843567ffffffffffffffff811115611f6057600080fd5b850160e08188031215611f7257600080fd5b935060208501359250611f8760408601611f0a565b9396929550929360600135925050565b600080600060608486031215611fac57600080fd5b8335925060208401359150611fc360408501611f0a565b90509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561201f5761201f611fcc565b60405290565b600082601f83011261203657600080fd5b813567ffffffffffffffff8082111561205157612051611fcc565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561209757612097611fcc565b816040528381528660208588010111156120b057600080fd5b836020870160208301376000602085830101528094505050505092915050565b80151581146120de57600080fd5b50565b8035611f2e816120d0565b600061014082840312156120ff57600080fd5b612107611ffb565b905081358152602082013567ffffffffffffffff8082111561212857600080fd5b61213485838601612025565b6020840152604084013591508082111561214d57600080fd5b5061215a84828501612025565b60408301525061216c60608301611f0a565b606082015261217d60808301611f0a565b608082015261218e60a08301611f0a565b60a082015260c082013560c082015260e082013560e08201526101006121b58184016120e1565b908201526101206121c78382016120e1565b9082015292915050565b6000606082840312156121e357600080fd5b50919050565b600080604083850312156121fc57600080fd5b823567ffffffffffffffff8082111561221457600080fd5b612220868387016120ec565b9350602085013591508082111561223657600080fd5b50612243858286016121d1565b9150509250929050565b6000806000806060858703121561226357600080fd5b843567ffffffffffffffff8082111561227b57600080fd5b612287888389016120ec565b9550602087013591508082111561229d57600080fd5b818701915087601f8301126122b157600080fd5b8135818111156122c057600080fd5b8860208260051b85010111156122d557600080fd5b6020830195508094505060408701359150808211156122f357600080fd5b50612300878288016121d1565b91505092959194509250565b81810381811115610e0e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561235857600080fd5b61236182611f0a565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261239d57600080fd5b83018035915067ffffffffffffffff8211156123b857600080fd5b6020019150368190038213156123cd57600080fd5b9250929050565b8183823760009101908152919050565b6000602082840312156123f657600080fd5b5051919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261243157600080fd5b9190910192915050565b60005b8381101561245657818101518382015260200161243e565b50506000910152565b6000815180845261247781602086016020860161243b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124d261016085018361245f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261250d838261245f565b9250506060850151612537608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125aa8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156125fd57600080fd5b8135612361816120d0565b6000808585111561261857600080fd5b8386111561262557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126725780818660040360031b1b83161692505b505092915050565b60006020828403121561268c57600080fd5b8151612361816120d0565b6000825161243181846020870161243b565b602081526000612361602083018461245f56fea26469706673582212207e59472516166ce1ea7e6d83306f32cabc8bc17f77a6ac86d8300f73546757cf64736f6c63430008110033";
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
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
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
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
