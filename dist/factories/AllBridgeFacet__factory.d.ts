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
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516126b03803806126b0833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b60805161262461008c5f395f81816105ee0152818161062e015261072701526126245ff3fe608060405260043610610028575f3560e01c8063a74ccb351461002c578063e40f246014610041575b5f5ffd5b61003f61003a3660046120ba565b610054565b005b61003f61004f366004612168565b610281565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476121b5565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102448a5f01518b60c001518b8b336104a1565b60c08b01526102538a886105e4565b504791505081811115610274576102745f8461026f85856121b5565b61083c565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030c34476121b5565b9050846103318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610368576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047088608001518960c00151610872565b61047a88886105e4565b504791505081811115610496576104965f8461026f85856121b5565b50505f909155505050565b5f828082036104dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ea6001856121b5565b8181106104f9576104f96121ed565b905060200281019061050b919061221a565b61051c906080810190606001612256565b90505f610528826109e4565b905073ffffffffffffffffffffffffffffffffffffffff82166105525761054f34826121b5565b90505b5f61055d8888610a9a565b90506105698888610ba4565b6105768a89898985610c10565b5f82610581856109e4565b61058b91906121b5565b9050898110156105d6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b61061782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610fbb565b61062760e0820160c08301612276565b15610725577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff165f1b8460c0015184602001358560400135866060013587608001358860a00160208101906106b19190612291565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b1681526106f397969594939291908b35906004016122e8565b5f604051808303815f87803b15801561070a575f5ffd5b505af115801561071c573d5f5f3e3d5ffd5b50505050610801565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd825f0135846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c0015185602001358660400135876060013588608001358960a00160208101906107ae9190612291565b5f6040518a63ffffffff1660e01b81526004016107d29897969594939291906122e8565b5f604051808303818588803b1580156107e9575f5ffd5b505af11580156107fb573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610830919061237d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610868576108638383836110f0565b505050565b610863828261126f565b805f036108ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109045780341015610900576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561096e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109929190612490565b9050818110156109d8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cd565b61086383333085611395565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a92576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a69573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a8d9190612490565b610a94565b475b92915050565b6060815f8167ffffffffffffffff811115610ab757610ab7611e79565b604051908082528060200260200182016040528015610ae0578160200160208202803683370190505b5090505f805b83811015610b9957868682818110610b0057610b006121ed565b9050602002810190610b12919061221a565b610b23906080810190606001612256565b9150610b2e826109e4565b838281518110610b4057610b406121ed565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b915734838281518110610b7957610b796121ed565b60200260200101818151610b8d91906121b5565b9052505b600101610ae6565b509095945050505050565b5f5b818110156108635736838383818110610bc157610bc16121ed565b9050602002810190610bd3919061221a565b9050610be560e0820160c08301612276565b15610c0757610c07610bfd6060830160408401612256565b8260800135610872565b50600101610ba6565b838383838260018114610ed7575f8585610c2b6001856121b5565b818110610c3a57610c3a6121ed565b9050602002810190610c4c919061221a565b610c5d906080810190606001612256565b90505f89815b81811015610e0457368d8d83818110610c7e57610c7e6121ed565b9050602002810190610c90919061221a565b9050610cbf610ca56060830160408401612256565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d215750610d21610cd86040830160208401612256565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d385750610d38610cd86020830183612256565b8015610dbb5750610dbb610d4f60a08301836124a7565b610d5d916004915f9161250f565b610d6691612536565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610df1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dfb8f826115aa565b50600101610c63565b505f90505b610e146001856121b5565b811015610ecf575f888883818110610e2e57610e2e6121ed565b9050602002810190610e40919061221a565b610e51906080810190606001612256565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec657858281518110610e9857610e986121ed565b6020026020010151610ea9826109e4565b610eb391906121b5565b92508215610ec657610ec681888561083c565b50600101610e09565b505050610faf565b875f5b81811015610fac57368b8b83818110610ef557610ef56121ed565b9050602002810190610f07919061221a565b9050610f1c610ca56060830160408401612256565b80610f355750610f35610cd86040830160208401612256565b8015610f4c5750610f4c610cd86020830183612256565b8015610f635750610f63610d4f60a08301836124a7565b610f99576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa38d826115aa565b50600101610eda565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fdb57505050565b73ffffffffffffffffffffffffffffffffffffffff8216611028576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561109b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110bf9190612490565b10156108635761086383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61187d565b73ffffffffffffffffffffffffffffffffffffffff831661113d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661118a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111f4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112189190612490565b90508082111561125e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105cd565b6112698484846119ea565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112bc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112ff576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105cd565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611355576040519150601f19603f3d011682016040523d82523d5f602084013e61135a565b606091505b5050905080610863576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166113e2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661142f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa15801561149d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114c19190612490565b90506114cf82868686611a40565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561153d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115619190612490565b61156b91906121b5565b146115a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115c06115ba6020830183612256565b3b151590565b6115f6576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611635576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611649610ca56060850160408601612256565b611653575f611659565b82608001355b90505f61167461166f6060860160408701612256565b6109e4565b90505f61168a61166f6080870160608801612256565b9050825f036116c0576116c06116a66060870160408801612256565b6116b66040880160208901612256565b8760800135610fbb565b846080013582101561170b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105cd565b5f8061171a6020880188612256565b73ffffffffffffffffffffffffffffffffffffffff168561173e60a08a018a6124a7565b60405161174c92919061259c565b5f6040518083038185875af1925050503d805f8114611786576040519150601f19603f3d011682016040523d82523d5f602084013e61178b565b606091505b50915091508161179e5761179e81611a9e565b5f6117b261166f60808a0160608b01612256565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896117e360208b018b612256565b6117f360608c0160408d01612256565b61180360808d0160608e01612256565b8c60800135898711611815578661181f565b61181f8a886121b5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119098482611aa8565b6112695760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526119e09085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b63565b6112698482611b63565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108639084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161195e565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112699085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161195e565b8051602082018181fd5b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611ad091906125ab565b5f604051808303815f865af19150503d805f8114611b09576040519150601f19603f3d011682016040523d82523d5f602084013e611b0e565b606091505b5091509150818015611b38575080511580611b38575080806020019051810190611b3891906125c1565b8015611b5a575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611bc4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c709092919063ffffffff16565b905080515f1480611be4575080806020019051810190611be491906125c1565b610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105cd565b6060611c7e84845f85611c86565b949350505050565b606082471015611d18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105cd565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611d4091906125ab565b5f6040518083038185875af1925050503d805f8114611d7a576040519150601f19603f3d011682016040523d82523d5f602084013e611d7f565b606091505b5091509150611d9087838387611d9b565b979650505050505050565b60608315611e305782515f03611e295773ffffffffffffffffffffffffffffffffffffffff85163b611e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105cd565b5081611c7e565b611c7e8383815115611e455781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cd91906125dc565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611eca57611eca611e79565b60405290565b5f82601f830112611edf575f5ffd5b813567ffffffffffffffff811115611ef957611ef9611e79565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611f4657611f46611e79565b604052818152838201602001851015611f5d575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f9c575f5ffd5b919050565b8015158114611fae575f5ffd5b50565b8035611f9c81611fa1565b5f6101408284031215611fcd575f5ffd5b611fd5611ea6565b823581529050602082013567ffffffffffffffff811115611ff4575f5ffd5b61200084828501611ed0565b602083015250604082013567ffffffffffffffff81111561201f575f5ffd5b61202b84828501611ed0565b60408301525061203d60608301611f79565b606082015261204e60808301611f79565b608082015261205f60a08301611f79565b60a082015260c0828101359082015260e080830135908201526120856101008301611fb1565b6101008201526120986101208301611fb1565b61012082015292915050565b5f60e082840312156120b4575f5ffd5b50919050565b5f5f5f5f61012085870312156120ce575f5ffd5b843567ffffffffffffffff8111156120e4575f5ffd5b6120f087828801611fbc565b945050602085013567ffffffffffffffff81111561210c575f5ffd5b8501601f8101871361211c575f5ffd5b803567ffffffffffffffff811115612132575f5ffd5b8760208260051b8401011115612146575f5ffd5b6020919091019350915061215d86604087016120a4565b905092959194509250565b5f5f610100838503121561217a575f5ffd5b823567ffffffffffffffff811115612190575f5ffd5b61219c85828601611fbc565b9250506121ac84602085016120a4565b90509250929050565b81810381811115610a94577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261224c575f5ffd5b9190910192915050565b5f60208284031215612266575f5ffd5b61226f82611f79565b9392505050565b5f60208284031215612286575f5ffd5b813561226f81611fa1565b5f602082840312156122a1575f5ffd5b81356004811061226f575f5ffd5b600481106122e4577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a083015261231e60c08301856122af565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526123a4610160840182612331565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123df8282612331565b9150506060840151612409608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161247861012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156124a0575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124da575f5ffd5b83018035915067ffffffffffffffff8211156124f4575f5ffd5b602001915036819003821315612508575f5ffd5b9250929050565b5f5f8585111561251d575f5ffd5b83861115612529575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612595577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f602082840312156125d1575f5ffd5b815161226f81611fa1565b602081525f61226f602083018461233156fea2646970667358221220017744cfd3a3bf79fd380eca7c70db2ec9a4568209b31ad24cd7688bb4c6a03064736f6c634300081d0033";
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
