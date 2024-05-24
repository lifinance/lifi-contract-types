import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SynapseBridgeFacet, SynapseBridgeFacetInterface } from "../SynapseBridgeFacet";
declare type SynapseBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SynapseBridgeFacet__factory extends ContractFactory {
    constructor(...args: SynapseBridgeFacetConstructorParams);
    deploy(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SynapseBridgeFacet>;
    getDeployTransaction(_synapseRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SynapseBridgeFacet;
    connect(signer: Signer): SynapseBridgeFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200278438038062002784833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516126e96200009b6000396000818161066501526106b401526126e96000f3fe6080604052600436106100295760003560e01c80637d9dd78b1461002e5780639700ad7514610043575b600080fd5b61004161003c36600461201f565b610056565b005b6100416100513660046120de565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761214b565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104cf565b60c08b01526102588a88610617565b50479150508181111561027a5761027a600084610275858561214b565b610786565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610314344761214b565b905061031f85612185565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103f486612185565b80610100015115610431576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043a87612185565b80610120015115610477576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049461048a60a08a0160808b01612191565b8960c001356107bc565b6104a66104a089612185565b88610617565b5047915050818111156104c3576104c3600084610275858561214b565b50506000909155505050565b60008280820361050b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561051a60018561214b565b818110610529576105296121b3565b905060200281019061053b91906121e2565b61054c906080810190606001612191565b9050600061055982610932565b905073ffffffffffffffffffffffffffffffffffffffff821661058357610580348261214b565b90505b600061058f88886109eb565b905061059b8888610af7565b6105a88a89898985610b64565b6000826105b485610932565b6105be919061214b565b905089811015610609576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015160009073ffffffffffffffffffffffffffffffffffffffff811661065b57505060c082015173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee61068e565b61068e84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f16565b60a084015160e085015160c086015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263c228814792869286906106e98a80612220565b6106f660208c018c612220565b6040518863ffffffff1660e01b815260040161071796959493929190612368565b6000604051808303818588803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610778919061243a565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107b2576107ad838383611059565b505050565b6107ad82826111db565b806000036107f6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084f578034101561084b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e0919061254d565b905081811015610926576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6107ad83333085611305565b600073ffffffffffffffffffffffffffffffffffffffff8216156109e3576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109de919061254d565b6109e5565b475b92915050565b60608160008167ffffffffffffffff811115610a0957610a09611dd9565b604051908082528060200260200182016040528015610a32578160200160208202803683370190505b5090506000805b83811015610aec57868682818110610a5357610a536121b3565b9050602002810190610a6591906121e2565b610a76906080810190606001612191565b9150610a8182610932565b838281518110610a9357610a936121b3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ae45734838281518110610acc57610acc6121b3565b60200260200101818151610ae0919061214b565b9052505b600101610a39565b509095945050505050565b60005b818110156107ad5736838383818110610b1557610b156121b3565b9050602002810190610b2791906121e2565b9050610b3960e0820160c08301612566565b15610b5b57610b5b610b516060830160408401612191565b82608001356107bc565b50600101610afa565b838383838260018114610e315760008585610b8060018561214b565b818110610b8f57610b8f6121b3565b9050602002810190610ba191906121e2565b610bb2906080810190606001612191565b9050600089815b81811015610d5d57368d8d83818110610bd457610bd46121b3565b9050602002810190610be691906121e2565b9050610c15610bfb6060830160408401612191565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c785750610c78610c2e6040830160208401612191565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c8f5750610c8f610c2e6020830183612191565b8015610d145750610d14610ca660a0830183612583565b610cb5916004916000916125ef565b610cbe91612619565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d4a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d548f8261151f565b50600101610bb9565b505060005b610d6d60018561214b565b811015610e29576000888883818110610d8857610d886121b3565b9050602002810190610d9a91906121e2565b610dab906080810190606001612191565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e2057858281518110610df257610df26121b3565b6020026020010151610e0382610932565b610e0d919061214b565b92508215610e2057610e20818885610786565b50600101610d62565b505050610f0a565b8760005b81811015610f0757368b8b83818110610e5057610e506121b3565b9050602002810190610e6291906121e2565b9050610e77610bfb6060830160408401612191565b80610e905750610e90610c2e6040830160208401612191565b8015610ea75750610ea7610c2e6020830183612191565b8015610ebe5750610ebe610ca660a0830183612583565b610ef4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610efe8d8261151f565b50600101610e35565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f3657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f83576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c919061254d565b10156107ad5761102e838360006117fd565b6107ad83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117fd565b73ffffffffffffffffffffffffffffffffffffffff83166110a6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611160573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611184919061254d565b9050808211156111ca576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610600565b6111d58484846119fd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611228576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561126b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610600565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112c5576040519150601f19603f3d011682016040523d82523d6000602084013e6112ca565b606091505b50509050806107ad576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611352576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661139f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611410573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611434919061254d565b905061144282868686611a53565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156114b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d6919061254d565b6114e0919061214b565b14611517576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61153561152f6020830183612191565b3b151590565b61156b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036115ab576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006115c0610bfb6060850160408601612191565b6115cb5760006115d1565b82608001355b905060006115ed6115e86060860160408701612191565b610932565b905060006116046115e86080870160608801612191565b90508260000361163b5761163b6116216060870160408801612191565b6116316040880160208901612191565b8760800135610f16565b8460800135821015611686576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610600565b6000806116966020880188612191565b73ffffffffffffffffffffffffffffffffffffffff16856116ba60a08a018a612583565b6040516116c8929190612661565b60006040518083038185875af1925050503d8060008114611705576040519150601f19603f3d011682016040523d82523d6000602084013e61170a565b606091505b50915091508161171d5761171d81611ab1565b60006117326115e860808a0160608b01612191565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961176360208b018b612191565b61177360608c0160408d01612191565b61178360808d0160608e01612191565b8c60800135898711611795578661179f565b61179f8a8861214b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061189d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611877573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189b919061254d565b155b611929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610600565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611abb565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107ad9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161197b565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526111d59085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161197b565b8051602082018181fd5b6000611b1d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bca9092919063ffffffff16565b9050805160001480611b3e575080806020019051810190611b3e9190612671565b6107ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610600565b6060611bd98484600085611be1565b949350505050565b606082471015611c73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610600565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c9c919061268e565b60006040518083038185875af1925050503d8060008114611cd9576040519150601f19603f3d011682016040523d82523d6000602084013e611cde565b606091505b5091509150611cef87838387611cfa565b979650505050505050565b60608315611d90578251600003611d895773ffffffffffffffffffffffffffffffffffffffff85163b611d89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610600565b5081611bd9565b611bd98383815115611da55781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060091906126a0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e2c57611e2c611dd9565b60405290565b600082601f830112611e4357600080fd5b813567ffffffffffffffff80821115611e5e57611e5e611dd9565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ea457611ea4611dd9565b81604052838152866020858801011115611ebd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f0157600080fd5b919050565b8015158114611f1457600080fd5b50565b8035611f0181611f06565b60006101408284031215611f3557600080fd5b611f3d611e08565b905081358152602082013567ffffffffffffffff80821115611f5e57600080fd5b611f6a85838601611e32565b60208401526040840135915080821115611f8357600080fd5b50611f9084828501611e32565b604083015250611fa260608301611edd565b6060820152611fb360808301611edd565b6080820152611fc460a08301611edd565b60a082015260c082013560c082015260e082013560e0820152610100611feb818401611f17565b90820152610120611ffd838201611f17565b9082015292915050565b60006040828403121561201957600080fd5b50919050565b6000806000806060858703121561203557600080fd5b843567ffffffffffffffff8082111561204d57600080fd5b61205988838901611f22565b9550602087013591508082111561206f57600080fd5b818701915087601f83011261208357600080fd5b81358181111561209257600080fd5b8860208260051b85010111156120a757600080fd5b6020830195508094505060408701359150808211156120c557600080fd5b506120d287828801612007565b91505092959194509250565b600080604083850312156120f157600080fd5b823567ffffffffffffffff8082111561210957600080fd5b90840190610140828703121561211e57600080fd5b9092506020840135908082111561213457600080fd5b5061214185828601612007565b9150509250929050565b818103818111156109e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109e53683611f22565b6000602082840312156121a357600080fd5b6121ac82611edd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261221657600080fd5b9190910192915050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6183360301811261221657600080fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff806122be84611edd565b168452806122ce60208501611edd565b16602085015250604082013560408401526060820135606084015260808201357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe183360301811261231e57600080fd5b820160208101903567ffffffffffffffff81111561233b57600080fd5b80360382131561234a57600080fd5b60a0608086015261235f60a086018284612254565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835287602084015280871660408401525084606083015260c060808301526123ad60c083018561229d565b82810360a08401526123bf818561229d565b9998505050505050505050565b60005b838110156123e75781810151838201526020016123cf565b50506000910152565b600081518084526124088160208601602086016123cc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124636101608501836123f0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261249e83826123f0565b92505060608501516124c8608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061253b8187018315159052565b90950151151593019290925250919050565b60006020828403121561255f57600080fd5b5051919050565b60006020828403121561257857600080fd5b81356121ac81611f06565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125b857600080fd5b83018035915067ffffffffffffffff8211156125d357600080fd5b6020019150368190038213156125e857600080fd5b9250929050565b600080858511156125ff57600080fd5b8386111561260c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126595780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561268357600080fd5b81516121ac81611f06565b600082516122168184602087016123cc565b6020815260006121ac60208301846123f056fea2646970667358221220766580ac282433f6c751b523b7bd57da1a132057d7e9238fa4ee1e12cfe7779964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_synapseRouter";
            readonly type: "address";
            readonly internalType: "contract ISynapseRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSynapseBridge";
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
            readonly name: "_synapseData";
            readonly type: "tuple";
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly components: readonly [{
                readonly name: "originQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "destQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSynapseBridge";
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
            readonly name: "_synapseData";
            readonly type: "tuple";
            readonly internalType: "struct SynapseBridgeFacet.SynapseData";
            readonly components: readonly [{
                readonly name: "originQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "destQuery";
                readonly type: "tuple";
                readonly internalType: "struct ISynapseRouter.SwapQuery";
                readonly components: readonly [{
                    readonly name: "swapAdapter";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokenOut";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "minAmountOut";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "rawParams";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
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
    static createInterface(): SynapseBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SynapseBridgeFacet;
}
export {};
