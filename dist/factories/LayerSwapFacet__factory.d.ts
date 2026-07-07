import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LayerSwapFacet, LayerSwapFacetInterface } from "../LayerSwapFacet";
type LayerSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LayerSwapFacet__factory extends ContractFactory {
    constructor(...args: LayerSwapFacetConstructorParams);
    deploy(_layerSwapDepository: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LayerSwapFacet>;
    getDeployTransaction(_layerSwapDepository: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LayerSwapFacet;
    connect(signer: Signer): LayerSwapFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516123ac3803806123ac83398101604081905261002e9161009b565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cc565b80516001600160a01b0381168114610096575f5ffd5b919050565b5f5f604083850312156100ac575f5ffd5b6100b583610080565b91506100c360208401610080565b90509250929050565b60805160a0516122ab6101015f395f61086a01525f8181607001528181610b1e01528181610be60152610c2b01526122ab5ff3fe608060405260043610610033575f3560e01c80631f5e1a3f146100375780634ae7323b1461004c578063b48fae2f1461005f575b5f5ffd5b61004a610045366004611df6565b6100bb565b005b61004a61005a366004611ebc565b6102fb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611f21565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a08761052e565b6102aa8a8861058f565b6102be8a5f01518b60c001518b8b336108f4565b60c08b01526102cd8a88610a36565b5047915050818111156102ee576102ee5f846102e98585611f21565b610df9565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610376576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103863447611f21565b9050846103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561049a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104d8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e18761052e565b6104eb888861058f565b6104fd88608001518960c00151610e2e565b6105078888610a36565b504791505081811115610523576105235f846102e98585611f21565b50505f909155505050565b5f61053f6040830160208401611f59565b73ffffffffffffffffffffffffffffffffffffffff160361058c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b80608001354211156105cd576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c083015160a08401515f927f36f801a910846003d851067e2763fa7696d5d9e7de9f98805c0ebdcaca4e87c292909185356106116040880160208901611f59565b60e0808a01516080808c015160408051602081019b909b528a81019990995260608a019790975273ffffffffffffffffffffffffffffffffffffffff9586168982015260a089019490945291841660c0880152948801359486019490945261010085019390935216610120830152830135610140820152610160016040516020818303038152906040528051906020012090505f6107a8604080518082018252601581527f4c492e4649204c6179657253776170204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f61eb1883172c2dbb1ba48af163b3817ca0c5cb29a143a4098122bbc9fb23c8cc818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f6108668261082d6060870187611f79565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610ee292505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108ed576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b5f8280820361092f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561093d600185611f21565b81811061094c5761094c611fe1565b905060200281019061095e919061200e565b61096f906080810190606001611f59565b90505f61097b82610f86565b905073ffffffffffffffffffffffffffffffffffffffff82166109a5576109a23482611f21565b90505b5f6109b08888610fd0565b90506109bc88886110da565b6109c98a89898985611146565b5f826109d485610f86565b6109de9190611f21565b905089811015610a28576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80355f9081527fe7f6f1ea398f71bfab05d07c2378c6e6f3bfc564ae8f7fdd750db5c5b212554c602081905260409091205460ff1615610aa2576040517fa6bc74c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81355f90815260208290526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080830151610afd9073ffffffffffffffffffffffffffffffffffffffff161590565b15610bdc5760c083015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906380a6de92908435610b576040870160208801611f59565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019290925273ffffffffffffffffffffffffffffffffffffffff1660248201526044015f604051808303818588803b158015610bc0575f5ffd5b505af1158015610bd2573d5f5f3e3d5ffd5b5050505050610cf8565b610c0f83608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161138e565b608083015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f4371f6390843590610c656040870160208801611f59565b60c08801516040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501529116604483015260648201526084015f604051808303815f87803b158015610ce1575f5ffd5b505af1158015610cf3573d5f5f3e3d5ffd5b505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610dbd576040820135610d7e576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e08301518351604080519085013581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610dec9190612096565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e2357610e1e82826113ba565b505050565b610e1e838383611427565b805f03610e67576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ec05780341015610ebc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ebc73ffffffffffffffffffffffffffffffffffffffff8316333084611495565b604051600190835f5260208301516040526040835103610f3657604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610f5a565b6041835103610f565760608301515f1a6020526040830151606052610f5a565b5f91505b6020600160805f855afa5191503d610f7957638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fc857610fc373ffffffffffffffffffffffffffffffffffffffff8316306114ed565b610fca565b475b92915050565b6060815f8167ffffffffffffffff811115610fed57610fed611bc1565b604051908082528060200260200182016040528015611016578160200160208202803683370190505b5090505f5f5b838110156110cf5786868281811061103657611036611fe1565b9050602002810190611048919061200e565b611059906080810190606001611f59565b915061106482610f86565b83828151811061107657611076611fe1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110c757348382815181106110af576110af611fe1565b602002602001018181516110c39190611f21565b9052505b60010161101c565b509095945050505050565b5f5b81811015610e1e57368383838181106110f7576110f7611fe1565b9050602002810190611109919061200e565b905061111b60e0820160c083016121a9565b1561113d5761113d6111336060830160408401611f59565b8260800135610e2e565b506001016110dc565b83838383825f80805b8381101561137257368c8c8381811061116a5761116a611fe1565b905060200281019061117c919061200e565b905061118b6020820182611f59565b935061119d6040820160208301611f59565b9250611240846111b060a0840184611f79565b6111be916004915f916121c2565b6111c7916121e9565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611328575061127461125a6060830160408401611f59565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156112ad57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611328575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561135f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113698e82611520565b5060010161114f565b50505050611383848484845f611793565b505050505050505050565b610e1e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119aa565b73ffffffffffffffffffffffffffffffffffffffff8216611407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ebc73ffffffffffffffffffffffffffffffffffffffff831682611ad7565b73ffffffffffffffffffffffffffffffffffffffff8216611474576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e1e73ffffffffffffffffffffffffffffffffffffffff84168383611af0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166114e057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115386115306020830183611f59565b6017903b1190565b61156e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115ad576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115c161125a6060850160408601611f59565b6115cb575f6115d1565b82608001355b90505f6115ec6115e76080860160608701611f59565b610f86565b9050815f03611622576116226116086060860160408701611f59565b6116186040870160208801611f59565b866080013561138e565b5f806116316020870187611f59565b73ffffffffffffffffffffffffffffffffffffffff168461165560a0890189611f79565b60405161166392919061224f565b5f6040518083038185875af1925050503d805f811461169d576040519150601f19603f3d011682016040523d82523d5f602084013e6116a2565b606091505b5091509150816116b5576116b581611b39565b5f6116c96115e76080890160608a01611f59565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116fa60208a018a611f59565b61170a60608b0160408c01611f59565b61171a60808c0160608d01611f59565b8b6080013589871161172c5786611736565b6117368a88611f21565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117a2600182611f21565b8181106117b1576117b1611fe1565b90506020028101906117c3919061200e565b6117d4906080810190606001611f59565b90505f5f5f5f5f5f5f5b8881101561199a576117f160018a611f21565b81108015611800575088600114155b156118db578d8d8281811061181757611817611fe1565b9050602002810190611829919061200e565b61183a906080810190606001611f59565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118db578a818151811061188157611881611fe1565b602002602001015161189287610f86565b61189c9190611f21565b965073ffffffffffffffffffffffffffffffffffffffff8616156118c0575f6118c2565b895b9350838711156118db576118db868d6102e9878b611f21565b8d8d828181106118ed576118ed611fe1565b90506020028101906118ff919061200e565b611910906060810190604001611f59565b945061191b85610f86565b925073ffffffffffffffffffffffffffffffffffffffff85161561193f575f611941565b895b9150818311801561197e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561199257611992858d6102e98587611f21565b6001016117de565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611ad15773ffffffffffffffffffffffffffffffffffffffff8316611a13576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611a86573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611aaa919061225e565b1015611ad157611ad173ffffffffffffffffffffffffffffffffffffffff85168483611b43565b50505050565b5f385f3884865af1610ebc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b30576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611b30575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611b3057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c1257611c12611bc1565b60405290565b5f82601f830112611c27575f5ffd5b813567ffffffffffffffff811115611c4157611c41611bc1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c8e57611c8e611bc1565b604052818152838201602001851015611ca5575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ce4575f5ffd5b919050565b80358015158114611ce4575f5ffd5b5f6101408284031215611d09575f5ffd5b611d11611bee565b823581529050602082013567ffffffffffffffff811115611d30575f5ffd5b611d3c84828501611c18565b602083015250604082013567ffffffffffffffff811115611d5b575f5ffd5b611d6784828501611c18565b604083015250611d7960608301611cc1565b6060820152611d8a60808301611cc1565b6080820152611d9b60a08301611cc1565b60a082015260c0828101359082015260e08083013590820152611dc16101008301611ce9565b610100820152611dd46101208301611ce9565b61012082015292915050565b5f60a08284031215611df0575f5ffd5b50919050565b5f5f5f5f60608587031215611e09575f5ffd5b843567ffffffffffffffff811115611e1f575f5ffd5b611e2b87828801611cf8565b945050602085013567ffffffffffffffff811115611e47575f5ffd5b8501601f81018713611e57575f5ffd5b803567ffffffffffffffff811115611e6d575f5ffd5b8760208260051b8401011115611e81575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611ea4575f5ffd5b611eb087828801611de0565b91505092959194509250565b5f5f60408385031215611ecd575f5ffd5b823567ffffffffffffffff811115611ee3575f5ffd5b611eef85828601611cf8565b925050602083013567ffffffffffffffff811115611f0b575f5ffd5b611f1785828601611de0565b9150509250929050565b81810381811115610fca577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611f69575f5ffd5b611f7282611cc1565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fac575f5ffd5b83018035915067ffffffffffffffff821115611fc6575f5ffd5b602001915036819003821315611fda575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612040575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120bd61016084018261204a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120f8828261204a565b9150506060840151612122608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161219161012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121b9575f5ffd5b611f7282611ce9565b5f5f858511156121d0575f5ffd5b838611156121dc575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612248577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561226e575f5ffd5b505191905056fea2646970667358221220bca4bce5887343b1dbd9e13c01da4d5a80ddec8ef073bb29438b45cfd9ef1b4d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_layerSwapDepository";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LAYERSWAP_DEPOSITORY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLayerSwap";
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
            readonly name: "_layerSwapData";
            readonly type: "tuple";
            readonly internalType: "struct LayerSwapFacet.LayerSwapData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositoryReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RequestAlreadyProcessed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }];
    static createInterface(): LayerSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LayerSwapFacet;
}
export {};
