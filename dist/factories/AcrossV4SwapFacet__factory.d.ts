import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossV4SwapFacet, AcrossV4SwapFacetInterface } from "../AcrossV4SwapFacet";
type AcrossV4SwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossV4SwapFacet__factory extends ContractFactory {
    constructor(...args: AcrossV4SwapFacetConstructorParams);
    deploy(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossV4SwapFacet>;
    getDeployTransaction(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossV4SwapFacet;
    connect(signer: Signer): AcrossV4SwapFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161225738038061225783398101604081905261002e91610097565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cf565b6001600160a01b0381168114610094575f5ffd5b50565b5f5f604083850312156100a8575f5ffd5b82516100b381610080565b60208401519092506100c481610080565b809150509250929050565b60805160a0516121546101035f395f8181606801526107cf01525f818160c4015281816106d9015261088301526121545ff3fe60806040526004361061003e575f3560e01c80631a40f9eb146100425780638021fef714610057578063991fe590146100b3578063b0996b1e146100e6575b5f5ffd5b61005561005036600461180a565b6100f9565b005b348015610062575f5ffd5b5061008a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100be575f5ffd5b5061008a7f000000000000000000000000000000000000000000000000000000000000000081565b6100556100f43660046118d0565b610365565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101843447611962565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156102d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08a01518a516102e990828c8c3361058d565b60c08c01525f6102f889611a69565b9050818c60c00151111561032b57818c60c001518a60a0013561031b9190611b25565b6103259190611b3c565b60a08201525b6103358c826106cf565b5047935050505081811115610358576103585f846103538585611962565b6108ea565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103f03447611962565b9050846104158160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610489576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610504576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610542576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055488608001518960c0015161091f565b6105668861056189611a69565b6106cf565b504791505081811115610582576105825f846103538585611962565b50505f909155505050565b5f828082036105c8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105d6600185611962565b8181106105e5576105e5611b74565b90506020028101906105f79190611ba1565b610608906080810190606001611bdd565b90505f610614826109d3565b905073ffffffffffffffffffffffffffffffffffffffff821661063e5761063b3482611962565b90505b5f6106498888610a1d565b90506106558888610b27565b6106628a89898985610b93565b5f8261066d856109d3565b6106779190611962565b9050898110156106c1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61070282608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610d55565b5f60405180610160016040528060405180604001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff168152508152602001835f01518152602001836020015173ffffffffffffffffffffffffffffffffffffffff168152602001836040015173ffffffffffffffffffffffffffffffffffffffff1681526020018360600151600281111561079e5761079e611bfd565b81526020018460c0015181526020018360a001518152602001836080015181526020018360c00151151581526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020015f81525090507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161083e9190611c76565b60405180910390a16040517f110560ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063110560ad906108b8908490600401611ea8565b5f604051808303815f87803b1580156108cf575f5ffd5b505af11580156108e1573d5f5f3e3d5ffd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166109145761090f8282610d81565b505050565b61090f838383610dee565b805f03610958576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109b157803410156109ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6109ad73ffffffffffffffffffffffffffffffffffffffff8316333084610e5c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a1557610a1073ffffffffffffffffffffffffffffffffffffffff831630610eb4565b610a17565b475b92915050565b6060815f8167ffffffffffffffff811115610a3a57610a3a611588565b604051908082528060200260200182016040528015610a63578160200160208202803683370190505b5090505f5f5b83811015610b1c57868682818110610a8357610a83611b74565b9050602002810190610a959190611ba1565b610aa6906080810190606001611bdd565b9150610ab1826109d3565b838281518110610ac357610ac3611b74565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b145734838281518110610afc57610afc611b74565b60200260200101818151610b109190611962565b9052505b600101610a69565b509095945050505050565b5f5b8181101561090f5736838383818110610b4457610b44611b74565b9050602002810190610b569190611ba1565b9050610b6860e0820160c08301611fea565b15610b8a57610b8a610b806060830160408401611bdd565b826080013561091f565b50600101610b29565b83838383825f5b81811015610d3b57368a8a83818110610bb557610bb5611b74565b9050602002810190610bc79190611ba1565b9050610bf6610bdc6060830160408401611bdd565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610c585750610c58610c0f6040830160208401611bdd565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c6f5750610c6f610c0f6020830183611bdd565b8015610cf25750610cf2610c8660a0830183612003565b610c94916004915f9161206b565b610c9d91612092565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d28576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d328c82610ee7565b50600101610b9a565b5050610d4a848484845f61115a565b505050505050505050565b61090f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611371565b73ffffffffffffffffffffffffffffffffffffffff8216610dce576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109ad73ffffffffffffffffffffffffffffffffffffffff83168261149e565b73ffffffffffffffffffffffffffffffffffffffff8216610e3b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61090f73ffffffffffffffffffffffffffffffffffffffff841683836114b7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610ea757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610eff610ef76020830183611bdd565b6017903b1190565b610f35576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610f74576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610f88610bdc6060850160408601611bdd565b610f92575f610f98565b82608001355b90505f610fb3610fae6080860160608701611bdd565b6109d3565b9050815f03610fe957610fe9610fcf6060860160408701611bdd565b610fdf6040870160208801611bdd565b8660800135610d55565b5f80610ff86020870187611bdd565b73ffffffffffffffffffffffffffffffffffffffff168461101c60a0890189612003565b60405161102a9291906120f8565b5f6040518083038185875af1925050503d805f8114611064576040519150601f19603f3d011682016040523d82523d5f602084013e611069565b606091505b50915091508161107c5761107c81611500565b5f611090610fae6080890160608a01611bdd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886110c160208a018a611bdd565b6110d160608b0160408c01611bdd565b6110e160808c0160608d01611bdd565b8b608001358987116110f357866110fd565b6110fd8a88611962565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611169600182611962565b81811061117857611178611b74565b905060200281019061118a9190611ba1565b61119b906080810190606001611bdd565b90505f5f5f5f5f5f5f5b88811015611361576111b860018a611962565b811080156111c7575088600114155b156112a2578d8d828181106111de576111de611b74565b90506020028101906111f09190611ba1565b611201906080810190606001611bdd565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146112a2578a818151811061124857611248611b74565b6020026020010151611259876109d3565b6112639190611962565b965073ffffffffffffffffffffffffffffffffffffffff861615611287575f611289565b895b9350838711156112a2576112a2868d610353878b611962565b8d8d828181106112b4576112b4611b74565b90506020028101906112c69190611ba1565b6112d7906060810190604001611bdd565b94506112e2856109d3565b925073ffffffffffffffffffffffffffffffffffffffff851615611306575f611308565b895b9150818311801561134557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561135957611359858d6103538587611962565b6001016111a5565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114985773ffffffffffffffffffffffffffffffffffffffff83166113da576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561144d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114719190612107565b10156114985761149873ffffffffffffffffffffffffffffffffffffffff8516848361150a565b50505050565b5f385f3884865af16109ad5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166114f7576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166114f7575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166114f757633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156115d9576115d9611588565b60405290565b604051610160810167ffffffffffffffff811182821017156115d9576115d9611588565b60405160e0810167ffffffffffffffff811182821017156115d9576115d9611588565b5f82601f830112611635575f5ffd5b8135602083015f5f67ffffffffffffffff84111561165557611655611588565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff821117156116a2576116a2611588565b6040528381529050808284018710156116b9575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116f8575f5ffd5b919050565b803580151581146116f8575f5ffd5b5f610140828403121561171d575f5ffd5b6117256115b5565b823581529050602082013567ffffffffffffffff811115611744575f5ffd5b61175084828501611626565b602083015250604082013567ffffffffffffffff81111561176f575f5ffd5b61177b84828501611626565b60408301525061178d606083016116d5565b606082015261179e608083016116d5565b60808201526117af60a083016116d5565b60a082015260c0828101359082015260e080830135908201526117d561010083016116fd565b6101008201526117e861012083016116fd565b61012082015292915050565b5f60e08284031215611804575f5ffd5b50919050565b5f5f5f5f6060858703121561181d575f5ffd5b843567ffffffffffffffff811115611833575f5ffd5b61183f8782880161170c565b945050602085013567ffffffffffffffff81111561185b575f5ffd5b8501601f8101871361186b575f5ffd5b803567ffffffffffffffff811115611881575f5ffd5b8760208260051b8401011115611895575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156118b8575f5ffd5b6118c4878288016117f4565b91505092959194509250565b5f5f604083850312156118e1575f5ffd5b823567ffffffffffffffff8111156118f7575f5ffd5b6119038582860161170c565b925050602083013567ffffffffffffffff81111561191f575f5ffd5b61192b858286016117f4565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610a1757610a17611935565b803563ffffffff811681146116f8575f5ffd5b5f6101608284031215611999575f5ffd5b6119a16115df565b90506119ac826116d5565b815260208281013590820152604080830135908201526119ce606083016116d5565b60608201526080828101359082015260a0808301359082015260c080830135908201526119fd60e08301611975565b60e0820152611a0f6101008301611975565b610100820152611a226101208301611975565b61012082015261014082013567ffffffffffffffff811115611a42575f5ffd5b611a4e84828501611626565b6101408301525092915050565b8035600381106116f8575f5ffd5b5f60e08236031215611a79575f5ffd5b611a81611603565b823567ffffffffffffffff811115611a97575f5ffd5b611aa336828601611988565b825250611ab2602084016116d5565b6020820152611ac3604084016116d5565b6040820152611ad460608401611a5b565b6060820152608083013567ffffffffffffffff811115611af2575f5ffd5b611afe36828601611626565b60808301525060a08381013590820152611b1a60c084016116fd565b60c082015292915050565b8082028115828204841417610a1757610a17611935565b5f82611b6f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611bd3575f5ffd5b9190910192915050565b5f60208284031215611bed575f5ffd5b611bf6826116d5565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611c9d610160840182611c2a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611cd88282611c2a565b9150506060840151611d02608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d7161012085018215159052565b50610120840151801515610140850152509392505050565b805173ffffffffffffffffffffffffffffffffffffffff16825260208101516020830152604081015160408301525f6060820151611ddf606085018273ffffffffffffffffffffffffffffffffffffffff169052565b506080820151608084015260a082015160a084015260c082015160c084015260e0820151611e1560e085018263ffffffff169052565b50610100820151611e2f61010085018263ffffffff169052565b50610120820151611e4961012085018263ffffffff169052565b50610140820151610160610140850152611e67610160850182611c2a565b949350505050565b60038110611ea4577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b60208082528251805183830152015173ffffffffffffffffffffffffffffffffffffffff1660408201525f60208301516101806060840152611eee6101a0840182611d89565b90506040840151611f17608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50606084015173ffffffffffffffffffffffffffffffffffffffff1660a08401526080840151611f4a60c0850182611e6f565b5060a084015160e084015260c084015161010084015260e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152611f9a8282611c2a565b915050610100840151611fb261014085018215159052565b5061012084015173ffffffffffffffffffffffffffffffffffffffff1661016084015261014090930151610180909201919091525090565b5f60208284031215611ffa575f5ffd5b611bf6826116fd565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612036575f5ffd5b83018035915067ffffffffffffffff821115612050575f5ffd5b602001915036819003821315612064575f5ffd5b9250929050565b5f5f85851115612079575f5ffd5b83861115612085575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156120f1577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612117575f5ffd5b505191905056fea2646970667358221220d1dbfac28925a9bb92f6e7ad12fcd42400bbaca54454867d8081d8278bf511a464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePoolPeriphery";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }, {
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL_PERIPHERY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableProportionalAdjustment";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableProportionalAdjustment";
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
    static createInterface(): AcrossV4SwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossV4SwapFacet;
}
export {};
