import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PaxosTransitFacet, PaxosTransitFacetInterface } from "../PaxosTransitFacet";
type PaxosTransitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PaxosTransitFacet__factory extends ContractFactory {
    constructor(...args: PaxosTransitFacetConstructorParams);
    deploy(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PaxosTransitFacet>;
    getDeployTransaction(_transitStation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PaxosTransitFacet;
    connect(signer: Signer): PaxosTransitFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161240b38038061240b83398101604081905261002e916100d0565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038116608081905260408051638ae97be160e01b81529051638ae97be1916004808201926020929091908290030181865afa15801561009d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100c191906100fd565b63ffffffff1660a05250610120565b5f602082840312156100e0575f5ffd5b81516001600160a01b03811681146100f6575f5ffd5b9392505050565b5f6020828403121561010d575f5ffd5b815163ffffffff811681146100f6575f5ffd5b60805160a0516122b66101555f395f818160db01526108b101525f818161012301528181610b210152610b6101526122b65ff3fe608060405260043610610058575f3560e01c8063637f1d0411610041578063637f1d04146100b757806388ade879146100ca578063c3c7a5be14610112575f5ffd5b80630ad0587c1461005c5780635080ffe2146100a2575b5f5ffd5b348015610067575f5ffd5b5061008f7f4c4946490000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100b56100b0366004611c80565b61016a565b005b6100b56100c5366004611ce5565b6104a8565b3480156100d5575f5ffd5b506100fd7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff9091168152602001610099565b34801561011d575f5ffd5b506101457f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610099565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101e5576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556101fb6101c083016101a08401611dab565b5f6102063447611dcb565b90508461022b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610262576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361029f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156102dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561031b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761033e816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610375576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103886101c08a016101a08b01611dab565b73ffffffffffffffffffffffffffffffffffffffff16036103d5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103df89896108a3565b60c0890151606089013514610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b34886101800135111561045f576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047189608001518a60c0015161096e565b61047b8989610a22565b5047925050508181111561049d5761049d5f846104988585611dcb565b610c37565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610523576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556105396101c083016101a08401611dab565b5f6105443447611dcb565b905086806101000151610583576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156105c1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886105e48160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561061b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610658576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961067b816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106b2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106c56101c08a016101a08b01611dab565b73ffffffffffffffffffffffffffffffffffffffff1603610712576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071c8b896108a3565b60c08b0151606089013590811461075f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89158015906107dc575060808c015173ffffffffffffffffffffffffffffffffffffffff168b8b610791600182611dcb565b8181106107a0576107a0611e03565b90506020028101906107b29190611e30565b6107c3906080810190606001611dab565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610813576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61083d8d5f0151838e8e8e6101a00160208101906108329190611dab565b8f6101800135610c67565b90508181111561086c5760808d015161086c906108626101c08d016101a08e01611dab565b6104988585611dcb565b6108768d8b610a22565b50479450505050828211159050610896576108965f846104988585611dcb565b50505f9091555050505050565b60e0820151461463ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166108de6020840184611e7f565b63ffffffff1614151581151514610921576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610932575061018082013515155b15610969576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b805f036109a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a0057803410156109fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6109fc73ffffffffffffffffffffffffffffffffffffffff8316333084610e01565b80610a336040820160208301611dab565b73ffffffffffffffffffffffffffffffffffffffff16836080015173ffffffffffffffffffffffffffffffffffffffff16141580610ab05750610a7c60a0820160808301611dab565b73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614155b80610ae057506101008101357f4c4946490000000000000000000000000000000000000000000000000000000014155b15610b17576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b4a83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610e59565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633784896a61018084013583610b9b610160870187611e98565b6040518563ffffffff1660e01b8152600401610bb993929190611f47565b60206040518083038185885af1158015610bd5573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610bfa9190612055565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610c2a91906120b8565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c5c576109698282610e85565b610969838383610ef2565b5f83808203610ca2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610cb0600185611dcb565b818110610cbf57610cbf611e03565b9050602002810190610cd19190611e30565b610ce2906080810190606001611dab565b90505f610cee82610f60565b905073ffffffffffffffffffffffffffffffffffffffff8216610d1857610d153482611dcb565b90505b5f610d238989610faa565b9050610d2f89896110b4565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610d6a818b8b85611120565b5f83610d7586610f60565b610d7f9190611dcb565b905073ffffffffffffffffffffffffffffffffffffffff8516610da957610da68882611dcb565b90505b8b811015610df1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e4c57637939f4245f526004601cfd5b5f60605260405250505050565b6109698383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611376565b73ffffffffffffffffffffffffffffffffffffffff8216610ed2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109fc73ffffffffffffffffffffffffffffffffffffffff8316826114a3565b73ffffffffffffffffffffffffffffffffffffffff8216610f3f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61096973ffffffffffffffffffffffffffffffffffffffff841683836114bc565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fa257610f9d73ffffffffffffffffffffffffffffffffffffffff831630611505565b610fa4565b475b92915050565b6060815f8167ffffffffffffffff811115610fc757610fc7611a4a565b604051908082528060200260200182016040528015610ff0578160200160208202803683370190505b5090505f5f5b838110156110a95786868281811061101057611010611e03565b90506020028101906110229190611e30565b611033906080810190606001611dab565b915061103e82610f60565b83828151811061105057611050611e03565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110a1573483828151811061108957611089611e03565b6020026020010181815161109d9190611dcb565b9052505b600101610ff6565b509095945050505050565b5f5b8181101561096957368383838181106110d1576110d1611e03565b90506020028101906110e39190611e30565b90506110f560e0820160c083016121cb565b156111175761111761110d6060830160408401611dab565b826080013561096e565b506001016110b6565b60208401516040850151849184918490835f80805b8381101561135a57368c8c8381811061115057611150611e03565b90506020028101906111629190611e30565b90506111716020820182611dab565b93506111836040820160208301611dab565b92506112268461119660a0840184611e98565b6111a4916004915f916121e4565b6111ad9161220b565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061130e575061125a6112406060830160408401611dab565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561129357508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561130e575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611345576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516113519082611538565b50600101611135565b5050505061136b85858585856117ab565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561149d5773ffffffffffffffffffffffffffffffffffffffff83166113df576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611452573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114769190612055565b101561149d5761149d73ffffffffffffffffffffffffffffffffffffffff851684836119c2565b50505050565b5f385f3884865af16109fc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166114fc576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115506115486020830183611dab565b6017903b1190565b611586576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115c5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115d96112406060850160408601611dab565b6115e3575f6115e9565b82608001355b90505f6116046115ff6080860160608701611dab565b610f60565b9050815f0361163a5761163a6116206060860160408701611dab565b6116306040870160208801611dab565b8660800135610e59565b5f806116496020870187611dab565b73ffffffffffffffffffffffffffffffffffffffff168461166d60a0890189611e98565b60405161167b929190612271565b5f6040518083038185875af1925050503d805f81146116b5576040519150601f19603f3d011682016040523d82523d5f602084013e6116ba565b606091505b5091509150816116cd576116cd81611a40565b5f6116e16115ff6080890160608a01611dab565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861171260208a018a611dab565b61172260608b0160408c01611dab565b61173260808c0160608d01611dab565b8b60800135898711611744578661174e565b61174e8a88611dcb565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117ba600182611dcb565b8181106117c9576117c9611e03565b90506020028101906117db9190611e30565b6117ec906080810190606001611dab565b90505f5f5f5f5f5f5f5b888110156119b25761180960018a611dcb565b81108015611818575088600114155b156118f3578d8d8281811061182f5761182f611e03565b90506020028101906118419190611e30565b611852906080810190606001611dab565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118f3578a818151811061189957611899611e03565b60200260200101516118aa87610f60565b6118b49190611dcb565b965073ffffffffffffffffffffffffffffffffffffffff8616156118d8575f6118da565b895b9350838711156118f3576118f3868d610498878b611dcb565b8d8d8281811061190557611905611e03565b90506020028101906119179190611e30565b611928906060810190604001611dab565b945061193385610f60565b925073ffffffffffffffffffffffffffffffffffffffff851615611957575f611959565b895b9150818311801561199657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119aa576119aa858d6104988587611dcb565b6001016117f6565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166114fc575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166114fc57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a9b57611a9b611a4a565b60405290565b5f82601f830112611ab0575f5ffd5b813567ffffffffffffffff811115611aca57611aca611a4a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b1757611b17611a4a565b604052818152838201602001851015611b2e575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b6d575f5ffd5b919050565b80358015158114611b6d575f5ffd5b5f6101408284031215611b92575f5ffd5b611b9a611a77565b823581529050602082013567ffffffffffffffff811115611bb9575f5ffd5b611bc584828501611aa1565b602083015250604082013567ffffffffffffffff811115611be4575f5ffd5b611bf084828501611aa1565b604083015250611c0260608301611b4a565b6060820152611c1360808301611b4a565b6080820152611c2460a08301611b4a565b60a082015260c0828101359082015260e08083013590820152611c4a6101008301611b72565b610100820152611c5d6101208301611b72565b61012082015292915050565b5f6101c08284031215611c7a575f5ffd5b50919050565b5f5f60408385031215611c91575f5ffd5b823567ffffffffffffffff811115611ca7575f5ffd5b611cb385828601611b81565b925050602083013567ffffffffffffffff811115611ccf575f5ffd5b611cdb85828601611c69565b9150509250929050565b5f5f5f5f60608587031215611cf8575f5ffd5b843567ffffffffffffffff811115611d0e575f5ffd5b611d1a87828801611b81565b945050602085013567ffffffffffffffff811115611d36575f5ffd5b8501601f81018713611d46575f5ffd5b803567ffffffffffffffff811115611d5c575f5ffd5b8760208260051b8401011115611d70575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d93575f5ffd5b611d9f87828801611c69565b91505092959194509250565b5f60208284031215611dbb575f5ffd5b611dc482611b4a565b9392505050565b81810381811115610fa4577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e62575f5ffd5b9190910192915050565b803563ffffffff81168114611b6d575f5ffd5b5f60208284031215611e8f575f5ffd5b611dc482611e6c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ecb575f5ffd5b83018035915067ffffffffffffffff821115611ee5575f5ffd5b602001915036819003821315611ef9575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b63ffffffff611f5585611e6c565b16815273ffffffffffffffffffffffffffffffffffffffff611f7960208601611b4a565b16602082015273ffffffffffffffffffffffffffffffffffffffff611fa060408601611b4a565b166040820152606084810135908201525f611fbd60808601611b4a565b73ffffffffffffffffffffffffffffffffffffffff16608083015260a0858101359083015260c08086013590830152611ff860e08601611b4a565b73ffffffffffffffffffffffffffffffffffffffff1660e0830152610100858101359083015261012080860135908301526101408086013590830152610180610160830181905261204c9083018486611f00565b95945050505050565b5f60208284031215612065575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120df61016084018261206c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261211a828261206c565b9150506060840151612144608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121b361012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121db575f5ffd5b611dc482611b72565b5f5f858511156121f2575f5ffd5b838611156121fe575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561226a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220b57242cfeffcacf061138c643dceeb4e6d63a6625b9c22024c28a2a3c996bc3164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_transitStation";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_DISTRIBUTOR_CODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PAXOS_TRANSIT_THIS_CHAIN_EID";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TRANSIT_STATION";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPaxosTransit";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPaxosTransit";
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
            readonly name: "_paxosData";
            readonly type: "tuple";
            readonly internalType: "struct PaxosTransitFacet.PaxosTransitData";
            readonly components: readonly [{
                readonly name: "quote";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Quote";
                readonly components: readonly [{
                    readonly name: "route";
                    readonly type: "tuple";
                    readonly internalType: "struct IPaxosTransit.Route";
                    readonly components: readonly [{
                        readonly name: "destEID";
                        readonly type: "uint32";
                        readonly internalType: "uint32";
                    }, {
                        readonly name: "offerAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }, {
                        readonly name: "wantAsset";
                        readonly type: "address";
                        readonly internalType: "address";
                    }];
                }, {
                    readonly name: "offerAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "receiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "protocolFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "integratorFeeReceiver";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "distributorCode";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }];
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    }];
    static createInterface(): PaxosTransitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PaxosTransitFacet;
}
export {};
