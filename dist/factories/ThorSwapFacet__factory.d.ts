import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200268338038062002683833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516125e86200009b600039600081816106c801526106f301526125e86000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c366004612059565b610056565b005b6100416100513660046120bd565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761217c565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561217c565b6107f8565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761217c565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b33610829565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561217c565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d091906121b6565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106278333308561096c565b505050565b4660011480156106695750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b156106a0576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff811615806106f1576106f1827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b86565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261073957600061073f565b8560c001515b61074c60208701876121cf565b608088015160c089015161076360208a018a6121f1565b8a604001356040518863ffffffff1660e01b81526004016107899695949392919061225d565b6000604051808303818588803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107ea9190612351565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561081f57610627838383610cc9565b6106278282610e4b565b600082808203610865576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561087460018561217c565b81811061088357610883612464565b90506020028101906108959190612493565b6108a69060808101906060016121cf565b905060006108b382610f75565b905073ffffffffffffffffffffffffffffffffffffffff82166108dd576108da348261217c565b90505b60006108e9888861102e565b90506108f5888861113a565b6109028a898989856111a7565b60008261090e85610f75565b610918919061217c565b90508981101561095e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109b9576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a06576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9b91906121b6565b9050610aa982868686611559565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3d91906121b6565b610b47919061217c565b14610b7e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bf3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c91906121b6565b101561062757610c9e83836000611635565b61062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611635565b73ffffffffffffffffffffffffffffffffffffffff8316610d16576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d63576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df491906121b6565b905080821115610e3a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610e458484846117b7565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e98576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610edb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f35576040519150601f19603f3d011682016040523d82523d6000602084013e610f3a565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611026576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ffd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102191906121b6565b611028565b475b92915050565b60608160008167ffffffffffffffff81111561104c5761104c611e13565b604051908082528060200260200182016040528015611075578160200160208202803683370190505b5090506000805b8381101561112f5786868281811061109657611096612464565b90506020028101906110a89190612493565b6110b99060808101906060016121cf565b91506110c482610f75565b8382815181106110d6576110d6612464565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611127573483828151811061110f5761110f612464565b60200260200101818151611123919061217c565b9052505b60010161107c565b509095945050505050565b60005b81811015610627573683838381811061115857611158612464565b905060200281019061116a9190612493565b905061117c60e0820160c083016124d1565b1561119e5761119e61119460608301604084016121cf565b82608001356104ac565b5060010161113d565b83838383826001811461147457600085856111c360018561217c565b8181106111d2576111d2612464565b90506020028101906111e49190612493565b6111f59060808101906060016121cf565b9050600089815b818110156113a057368d8d8381811061121757611217612464565b90506020028101906112299190612493565b905061125861123e60608301604084016121cf565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112bb57506112bb61127160408301602084016121cf565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112d257506112d261127160208301836121cf565b801561135757506113576112e960a08301836121f1565b6112f8916004916000916124ee565b61130191612518565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61138d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113978f8261180d565b506001016111fc565b505060005b6113b060018561217c565b81101561146c5760008888838181106113cb576113cb612464565b90506020028101906113dd9190612493565b6113ee9060808101906060016121cf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146114635785828151811061143557611435612464565b602002602001015161144682610f75565b611450919061217c565b92508215611463576114638188856107f8565b506001016113a5565b50505061154d565b8760005b8181101561154a57368b8b8381811061149357611493612464565b90506020028101906114a59190612493565b90506114ba61123e60608301604084016121cf565b806114d357506114d361127160408301602084016121cf565b80156114ea57506114ea61127160208301836121cf565b801561150157506115016112e960a08301836121f1565b611537576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115418d8261180d565b50600101611478565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e459085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aeb565b8015806116d557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d391906121b6565b155b611761576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610612565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b3565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b3565b61182361181d60208301836121cf565b3b151590565b611859576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611899576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118ae61123e60608501604086016121cf565b6118b95760006118bf565b82608001355b905060006118db6118d660608601604087016121cf565b610f75565b905060006118f26118d660808701606088016121cf565b9050826000036119295761192961190f60608701604088016121cf565b61191f60408801602089016121cf565b8760800135610b86565b8460800135821015611974576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b60008061198460208801886121cf565b73ffffffffffffffffffffffffffffffffffffffff16856119a860a08a018a6121f1565b6040516119b6929190612560565b60006040518083038185875af1925050503d80600081146119f3576040519150601f19603f3d011682016040523d82523d6000602084013e6119f8565b606091505b509150915081611a0b57611a0b81611bfa565b6000611a206118d660808a0160608b016121cf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a5160208b018b6121cf565b611a6160608c0160408d016121cf565b611a7160808d0160608e016121cf565b8c60800135898711611a835786611a8d565b611a8d8a8861217c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b4d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c049092919063ffffffff16565b9050805160001480611b6e575080806020019051810190611b6e9190612570565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b8051602082018181fd5b6060611c138484600085611c1b565b949350505050565b606082471015611cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611cd6919061258d565b60006040518083038185875af1925050503d8060008114611d13576040519150601f19603f3d011682016040523d82523d6000602084013e611d18565b606091505b5091509150611d2987838387611d34565b979650505050505050565b60608315611dca578251600003611dc35773ffffffffffffffffffffffffffffffffffffffff85163b611dc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611c13565b611c138383815115611ddf5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610612919061259f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e6657611e66611e13565b60405290565b600082601f830112611e7d57600080fd5b813567ffffffffffffffff80821115611e9857611e98611e13565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ede57611ede611e13565b81604052838152866020858801011115611ef757600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f3b57600080fd5b919050565b8015158114611f4e57600080fd5b50565b8035611f3b81611f40565b60006101408284031215611f6f57600080fd5b611f77611e42565b905081358152602082013567ffffffffffffffff80821115611f9857600080fd5b611fa485838601611e6c565b60208401526040840135915080821115611fbd57600080fd5b50611fca84828501611e6c565b604083015250611fdc60608301611f17565b6060820152611fed60808301611f17565b6080820152611ffe60a08301611f17565b60a082015260c082013560c082015260e082013560e0820152610100612025818401611f51565b90820152610120612037838201611f51565b9082015292915050565b60006060828403121561205357600080fd5b50919050565b6000806040838503121561206c57600080fd5b823567ffffffffffffffff8082111561208457600080fd5b61209086838701611f5c565b935060208501359150808211156120a657600080fd5b506120b385828601612041565b9150509250929050565b600080600080606085870312156120d357600080fd5b843567ffffffffffffffff808211156120eb57600080fd5b6120f788838901611f5c565b9550602087013591508082111561210d57600080fd5b818701915087601f83011261212157600080fd5b81358181111561213057600080fd5b8860208260051b850101111561214557600080fd5b60208301955080945050604087013591508082111561216357600080fd5b5061217087828801612041565b91505092959194509250565b81810381811115611028577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156121c857600080fd5b5051919050565b6000602082840312156121e157600080fd5b6121ea82611f17565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261222657600080fd5b83018035915067ffffffffffffffff82111561224157600080fd5b60200191503681900382131561225657600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b838110156122fe5781810151838201526020016122e6565b50506000910152565b6000815180845261231f8160208601602086016122e3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261237a610160850183612307565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526123b58382612307565b92505060608501516123df608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124528187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126124c757600080fd5b9190910192915050565b6000602082840312156124e357600080fd5b81356121ea81611f40565b600080858511156124fe57600080fd5b8386111561250b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125585780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561258257600080fd5b81516121ea81611f40565b600082516124c78184602087016122e3565b6020815260006121ea602083018461230756fea2646970667358221220f864fdd5b128aaa7cf523284cb8785b8de8d3e96d65ff8adb258d69a36e073a864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_thorchainRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
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
        readonly name: "DeprecatedToken";
        readonly inputs: readonly [];
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
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
