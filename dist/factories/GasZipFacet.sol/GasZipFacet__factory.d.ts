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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200274b3803806200274b833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126aa620000a16000396000818160b90152818161016e015261021e01526126aa6000f3fe60806040526004361061005a5760003560e01c8063a8885f6211610043578063a8885f6214610094578063ba956b9a146100a7578063ded5b2c31461010457600080fd5b80633d86ea871461005f578063867372e414610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004611efc565b610117565b005b61007f61008f366004611f58565b6101d2565b61007f6100a23660046121a1565b61024f565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61007f610112366004612205565b610478565b6101226000846106a5565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659047906044015b6000604051808303818588803b1580156101b457600080fd5b505af11580156101c8573d6000803e3d6000fd5b5050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f6590859060440161019b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102ca576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006102db34476122c4565b9050846103008160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610337576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610375576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103b2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561042e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61044088608001518960c001516109a2565b61044a8888610b1d565b50479150508181111561046c5761046c60008461046785856122c4565b610bb0565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104f3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061050434476122c4565b905086806101000151610543576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610581576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105a48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105db576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610619576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610656576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61066b8a600001518b60c001518b8b33610be1565b60c08b015261067a8a88610b1d565b5047915050818111156106975761069760008461046785856122c4565b505060009091555050505050565b6106bb6106b560208301836122fe565b3b151590565b6106f1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610731576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061076061074660608501604086016122fe565b73ffffffffffffffffffffffffffffffffffffffff161590565b61076b576000610771565b82608001355b9050600061078d61078860608601604087016122fe565b610d24565b905060006107a461078860808701606088016122fe565b9050826000036107db576107db6107c160608701604088016122fe565b6107d160408801602089016122fe565b8760800135610ddd565b846080013582101561082b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b60008061083b60208801886122fe565b73ffffffffffffffffffffffffffffffffffffffff168561085f60a08a018a612320565b60405161086d92919061238c565b60006040518083038185875af1925050503d80600081146108aa576040519150601f19603f3d011682016040523d82523d6000602084013e6108af565b606091505b5091509150816108c2576108c281610f20565b60006108d761078860808a0160608b016122fe565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961090860208b018b6122fe565b61091860608c0160408d016122fe565b61092860808d0160608e016122fe565b8c6080013589871161093a5786610944565b6109448a886122c4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b806000036109dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a355780341015610a31576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac6919061239c565b905081811015610b0c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610822565b610b1883333085610f2a565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610b5857610b538260c0015182600001358460a001516101d2565b610b75565b610b75610b6860208301836123b5565b60a0840151833590610117565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ba49190612461565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610bd757610b18838383611144565b610b1882826112c6565b600082808203610c1d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c2c6001856122c4565b818110610c3b57610c3b612574565b9050602002810190610c4d91906123b5565b610c5e9060808101906060016122fe565b90506000610c6b82610d24565b905073ffffffffffffffffffffffffffffffffffffffff8216610c9557610c9234826122c4565b90505b6000610ca188886113f0565b9050610cad88886114fc565b610cba8a89898985611569565b600082610cc685610d24565b610cd091906122c4565b905089811015610d16576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610822565b9a9950505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610dd5576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610dac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd0919061239c565b610dd7565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610dfd57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e4a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ebf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee3919061239c565b1015610b1857610ef583836000611901565b610b1883837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611901565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416610f77576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fc4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611035573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611059919061239c565b905061106782868686611b01565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156110d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110fb919061239c565b61110591906122c4565b1461113c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611191576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111de576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561124b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126f919061239c565b9050808211156112b5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610822565b6112c0848484611b5f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611313576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611356576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610822565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146113b0576040519150601f19603f3d011682016040523d82523d6000602084013e6113b5565b606091505b5050905080610b18576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff81111561140e5761140e611f84565b604051908082528060200260200182016040528015611437578160200160208202803683370190505b5090506000805b838110156114f15786868281811061145857611458612574565b905060200281019061146a91906123b5565b61147b9060808101906060016122fe565b915061148682610d24565b83828151811061149857611498612574565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166114e957348382815181106114d1576114d1612574565b602002602001018181516114e591906122c4565b9052505b60010161143e565b509095945050505050565b60005b81811015610b18573683838381811061151a5761151a612574565b905060200281019061152c91906123b5565b905061153e60e0820160c083016125a3565b156115605761156061155660608301604084016122fe565b82608001356109a2565b506001016114ff565b83838383826001811461181c57600085856115856001856122c4565b81811061159457611594612574565b90506020028101906115a691906123b5565b6115b79060808101906060016122fe565b9050600089815b8181101561174857368d8d838181106115d9576115d9612574565b90506020028101906115eb91906123b5565b905061160061074660608301604084016122fe565b80611663575061166361161960408301602084016122fe565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561167a575061167a61161960208301836122fe565b80156116ff57506116ff61169160a0830183612320565b6116a0916004916000916125c0565b6116a9916125ea565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611735576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61173f8f826106a5565b506001016115be565b505060005b6117586001856122c4565b81101561181457600088888381811061177357611773612574565b905060200281019061178591906123b5565b6117969060808101906060016122fe565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461180b578582815181106117dd576117dd612574565b60200260200101516117ee82610d24565b6117f891906122c4565b9250821561180b5761180b818885610bb0565b5060010161174d565b5050506118f5565b8760005b818110156118f257368b8b8381811061183b5761183b612574565b905060200281019061184d91906123b5565b905061186261074660608301604084016122fe565b8061187b575061187b61161960408301602084016122fe565b8015611892575061189261161960208301836122fe565b80156118a957506118a961169160a0830183612320565b6118df576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6118e98d826106a5565b50600101611820565b50505b50505050505050505050565b8015806119a157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561197b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199f919061239c565b155b611a2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610822565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b189084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bb5565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112c09085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a7f565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b189084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a7f565b6000611c17826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cc49092919063ffffffff16565b9050805160001480611c38575080806020019051810190611c389190612632565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610822565b6060611cd38484600085611cdb565b949350505050565b606082471015611d6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610822565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d96919061264f565b60006040518083038185875af1925050503d8060008114611dd3576040519150601f19603f3d011682016040523d82523d6000602084013e611dd8565b606091505b5091509150611de987838387611df4565b979650505050505050565b60608315611e8a578251600003611e835773ffffffffffffffffffffffffffffffffffffffff85163b611e83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610822565b5081611cd3565b611cd38383815115611e9f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108229190612661565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ef757600080fd5b919050565b600080600060608486031215611f1157600080fd5b833567ffffffffffffffff811115611f2857600080fd5b840160e08187031215611f3a57600080fd5b925060208401359150611f4f60408501611ed3565b90509250925092565b600080600060608486031215611f6d57600080fd5b8335925060208401359150611f4f60408501611ed3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fd757611fd7611f84565b60405290565b600082601f830112611fee57600080fd5b813567ffffffffffffffff8082111561200957612009611f84565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561204f5761204f611f84565b8160405283815286602085880101111561206857600080fd5b836020870160208301376000602085830101528094505050505092915050565b801515811461209657600080fd5b50565b8035611ef781612088565b600061014082840312156120b757600080fd5b6120bf611fb3565b905081358152602082013567ffffffffffffffff808211156120e057600080fd5b6120ec85838601611fdd565b6020840152604084013591508082111561210557600080fd5b5061211284828501611fdd565b60408301525061212460608301611ed3565b606082015261213560808301611ed3565b608082015261214660a08301611ed3565b60a082015260c082013560c082015260e082013560e082015261010061216d818401612099565b9082015261012061217f838201612099565b9082015292915050565b60006040828403121561219b57600080fd5b50919050565b600080604083850312156121b457600080fd5b823567ffffffffffffffff808211156121cc57600080fd5b6121d8868387016120a4565b935060208501359150808211156121ee57600080fd5b506121fb85828601612189565b9150509250929050565b6000806000806060858703121561221b57600080fd5b843567ffffffffffffffff8082111561223357600080fd5b61223f888389016120a4565b9550602087013591508082111561225557600080fd5b818701915087601f83011261226957600080fd5b81358181111561227857600080fd5b8860208260051b850101111561228d57600080fd5b6020830195508094505060408701359150808211156122ab57600080fd5b506122b887828801612189565b91505092959194509250565b81810381811115610dd7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561231057600080fd5b61231982611ed3565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261235557600080fd5b83018035915067ffffffffffffffff82111561237057600080fd5b60200191503681900382131561238557600080fd5b9250929050565b8183823760009101908152919050565b6000602082840312156123ae57600080fd5b5051919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123e957600080fd5b9190910192915050565b60005b8381101561240e5781810151838201526020016123f6565b50506000910152565b6000815180845261242f8160208601602086016123f3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261248a610160850183612417565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124c58382612417565b92505060608501516124ef608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125628187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156125b557600080fd5b813561231981612088565b600080858511156125d057600080fd5b838611156125dd57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561262a5780818660040360031b1b83161692505b505092915050565b60006020828403121561264457600080fd5b815161231981612088565b600082516123e98184602087016123f3565b602081526000612319602083018461241756fea26469706673582212205eeb1b53e357ac6e01dfa917b09d4c051e3349f05db9843a7f2cc68ec2ac8db164736f6c63430008110033";
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
